import { Layout, Menu } from 'antd';
import { RadarChartOutlined } from '@ant-design/icons';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const { Content, Sider } = Layout;

const menuItems = [
	{
		path: '/',
		icon: <RadarChartOutlined />,
		label: '测试OpenAI余额',
	},
	{
		path: '/upup',
		icon: (
			<img
				src="/src/images/upup/upupimg_0.png"
				style={{ height: 14, objectFit: 'contain' }}
			/>
		),
		label: '举牌小人生成器',
	},
];

function MainView() {
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedKeys, setSelectedKeys] = useState(['/']);

	useEffect(() => {
		const _tempSelectedKeys = [location.pathname];
		setSelectedKeys(_tempSelectedKeys);
	}, [location]);

	const clickNav = (path: string) => {
		navigate(path);
		setSelectedKeys([path]);
	};
	return (
		<Layout
			style={{
				width: '100%',
				height: '100%',
			}}
		>
			<Layout>
				<Sider theme="light">
					<Menu
						mode="inline"
						selectedKeys={selectedKeys}
						style={{
							height: '100%',
							paddingBottom: 200,
							overflowY: 'auto',
							overflowX: 'hidden',
						}}
						className="hide-scrollbar"
						items={menuItems.map(item => {
							return {
								key: item.path,
								icon: item.icon,
								label: item.label,
								onClick: () => {
									clickNav(item.path);
								},
							};
						})}
					/>
				</Sider>
				<Layout className="site-layout">
					<Content
						className="site-layout-background"
						style={{
							padding: 12,
							minHeight: 280,
							overflowX: 'hidden',
							// margin: '0 auto',
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
}

export default MainView;
