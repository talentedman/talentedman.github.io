import { Spin } from 'antd';
import { lazy, ReactNode, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import MainView from '../MainView';

const Widget_Xbbcq = lazy(() => import('@/components/Widget_Xbbcq'));
const Widget_UpUp = lazy(() => import('@/components/Widget_UpUp'));

export const routers: RouteObject[] = [
	{
		path: '/',
		element: <MainView />,
		children: [
			{
				path: '/',
				element: lazyLoad(<Widget_Xbbcq />),
			},
			{
				path: '/upup',
				element: lazyLoad(<Widget_UpUp />),
			},
		],
	},
];

// 实现懒加载的用Suspense包裹 定义函数
function lazyLoad(children: ReactNode): ReactNode {
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
}
