import { agileHeroArray, intelligenceHeroArray, powerHeroArray } from '@/services/xbbcq_service';
import { Divider, Radio, RadioChangeEvent } from 'antd';
import { DisplayHeroWidget } from './xbbcq/DisplayHeroWidget';
import { useState } from 'react';
import TabHandBook from './xbbcq/TabHandBook';
import { TabOrderHero } from './xbbcq/TabOrderHero';

export default function Widget_Xbbcq() {
    const [tab, setTab] = useState<'handbook' | 'station' | 'pk'>('handbook');

    const onTabChange = (e: RadioChangeEvent) => {
        setTab(e.target.value)
    }

    const renderContent = () => {
        switch (tab) {
            case 'handbook':
                return <TabHandBook />
            case 'station':
                return <TabOrderHero />
            default:
                return null;
        }
    }

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
			}}
		>
			<Radio.Group value={tab} buttonStyle="solid" onChange={onTabChange}>
				<Radio.Button value="handbook">英雄图鉴</Radio.Button>
				<Radio.Button value="station">英雄站位</Radio.Button>
                <Radio.Button value="pk">pk阵容</Radio.Button>
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
