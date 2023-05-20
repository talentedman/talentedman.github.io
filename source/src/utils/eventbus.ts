import { EventBusMap } from '@/interface/EventBusMap';
import { vLog, vWarn } from './log_util';

export type EventBusCallback<T = any> = (param: T) => void;

interface ListenerProps {
	handler: EventBusCallback<any>;
	once: boolean;
}

const logTag = 'EventBus';

class _EventBus {
	// 所有事件的监听器
	private _listeners: Map<string, ListenerProps[]> = new Map();

	on<K extends keyof EventBusMap>(
		eventName: K,
		handler: EventBusCallback<EventBusMap[K]>,
		once: boolean = false
	) {
		let listeners = this._listeners.get(eventName);
		if (!listeners) {
			listeners = [];
			this._listeners.set(eventName, listeners);
		}
		for (let i = listeners.length - 1; i >= 0; i--) {
			if (listeners[i].handler === handler) {
				vWarn(
					logTag,
					`on 重复了 eventName=${eventName} once=${once} _listeners=`,
					this._listeners
				);
				return;
			}
		}
		listeners.push({
			handler,
			once,
		});
		vLog(logTag, `on success eventName=${eventName} once=${once} _listeners=`, this._listeners);
	}

	once<K extends keyof EventBusMap>(eventName: K, handler: EventBusCallback<EventBusMap[K]>) {
		this.on(eventName, handler, true);
	}

	emit<K extends keyof EventBusMap>(eventName: K, params?: EventBusMap[K]) {
		const listeners = this._listeners.get(eventName);
		if (!listeners || listeners.length === 0) {
			vWarn(logTag, `emit 找不到对应的监听器 eventName=${eventName}`);
			return;
		}
		for (let i = listeners.length - 1; i >= 0; i--) {
			const { handler, once } = listeners[i];
			handler(params);
			vLog(logTag, `emit success eventName=${eventName} params=`, params);

			if (once) {
				this.off(eventName, handler);
			}
		}
	}

	off<K extends keyof EventBusMap>(eventName: K, offHandler: EventBusCallback<EventBusMap[K]>) {
		const listeners = this._listeners.get(eventName);
		if (!listeners || listeners.length === 0) {
			vWarn(logTag, `off 找不到对应的监听器 eventName=${eventName}`);
			return;
		}

		for (let i = listeners.length - 1; i >= 0; i--) {
			const { handler } = listeners[i];
			if (handler === offHandler) {
				listeners.splice(i, 1);
				if (listeners.length === 0) {
					this._listeners.delete(eventName);
				}
				vLog(logTag, `off success eventName=${eventName} _listeners=`, this._listeners);
				return;
			}
		}
		vWarn(logTag, `off 找不到要取消监听的函数体 offHandler=${offHandler}`);
	}

	offAll() {
		this._listeners.clear();
		vLog(logTag, `offAll success, _listeners=`, this._listeners);
	}
}

const EventBus = new _EventBus();

export default EventBus;
