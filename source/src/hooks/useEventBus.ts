import { EventBusMap } from '@/interface/EventBusMap';
import EventBus, { EventBusCallback } from '@/utils/eventbus';
import { useEffect } from 'react';

export const useEventBus = <K extends keyof EventBusMap>(
	eventName: K,
	handler: EventBusCallback<EventBusMap[K]>
) => {
	useEffect(() => {
		EventBus.on(eventName, handler);
		return () => {
			EventBus.off(eventName, handler);
		};
	}, [eventName]);
};
