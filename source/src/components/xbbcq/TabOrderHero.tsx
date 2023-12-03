import { orderHeroArray } from '@/services/xbbcq_service';
import React from 'react';

function getImageUrl(imgName: string) {
	return new URL(`../../images/xbbcq/hero/${imgName}`, import.meta.url).href;
}

export const TabOrderHero: React.FC<{}> = ({}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				alignItems: 'center',
				width: '100%',
			}}
		>
			{orderHeroArray.map((hero, index) => {
				return (
					<div
						key={hero.name}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							width: 64,
						}}
					>
						<img
							src={getImageUrl(hero.imgName)}
							alt=""
							style={{
								width: 50,
								height: 50,
							}}
						/>
						{hero.name}
					</div>
				);
			})}
		</div>
	);
};
