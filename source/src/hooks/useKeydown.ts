import { useEffect } from 'react';

export const useKeydown = (executor: Function) => {
	useEffect(() => {
		// 获取位置信息
		const onKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				executor();
			}
		};

		document.addEventListener('keydown', onKeydown);
		return () => {
			document.removeEventListener('keydown', onKeydown);
		};
	}, []);
};
