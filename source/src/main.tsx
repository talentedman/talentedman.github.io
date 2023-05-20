import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.less';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<HashRouter>
			<ConfigProvider locale={zhCN}>
				<App />
			</ConfigProvider>
		</HashRouter>
	</Provider>
);
