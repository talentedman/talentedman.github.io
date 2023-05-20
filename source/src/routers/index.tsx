import { Spin } from 'antd';
import { lazy, ReactNode, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import MainView from '../MainView';

const Widget_CheckChatGPTMoney = lazy(() => import('@/components/Widget_CheckChatGPTMoney'));

// 实现懒加载的用Suspense包裹 定义函数
const lazyLoad = (children: ReactNode): ReactNode => {
	const loadWidget = (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Spin size="large" tip="Loading..." />
		</div>
	);
	return <Suspense fallback={loadWidget}>{children}</Suspense>;
};

export const routers: RouteObject[] = [
	{
		path: '/',
		element: <MainView />,
		children: [
			{
				index: true,
				element: lazyLoad(<Widget_CheckChatGPTMoney />),
			},
		],
	},
];
