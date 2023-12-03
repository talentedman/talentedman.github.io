import { agileHeroArray, intelligenceHeroArray, powerHeroArray } from '@/services/xbbcq_service';
import { Divider } from 'antd';
import { DisplayHeroWidget } from './DisplayHeroWidget';

export default function TabHandBook() {
	return (
		<>
            <DisplayHeroWidget heroArray={powerHeroArray} title="力量" />
			<Divider />
			<DisplayHeroWidget heroArray={intelligenceHeroArray} title="智力" />
			<Divider />
			<DisplayHeroWidget heroArray={agileHeroArray} title="敏捷" />
			<Divider />
        </>
	);
}
