import { Radio, RadioChangeEvent } from 'antd';
import { useState } from 'react';
import TabHandBook from './xbbcq/TabHandBook';
import { TabOrderHero } from './xbbcq/TabOrderHero';
import TabPkRecommend from './xbbcq/TabPkRecommend';

export default function Widget_Xbbcq() {
	const [tab, setTab] = useState<'handbook' | 'station' | 'pk'>('pk');

	const onTabChange = (e: RadioChangeEvent) => {
		setTab(e.target.value);
	};

	const renderContent = () => {
		switch (tab) {
			case 'handbook':
				return <TabHandBook />;
			case 'station':
				return <TabOrderHero />;
			case 'pk':
				return <TabPkRecommend />;
			default:
				return null;
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
			}}
		>
			<Radio.Group value={tab} buttonStyle="solid" onChange={onTabChange}>
				<Radio.Button value="pk">pk阵容</Radio.Button>
				<Radio.Button value="handbook">英雄图鉴</Radio.Button>
				<Radio.Button value="station">英雄站位</Radio.Button>
			</Radio.Group>

			<div
				style={{
					marginTop: 20,
				}}
			>
				{renderContent()}
			</div>
		</div>
	);
}
