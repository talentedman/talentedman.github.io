import { findRecommendList } from '@/services/xbbcq_pk_recommend_service';
import { Hero, findHeroImg, heroArray } from '@/services/xbbcq_service';
import { Divider, Select } from 'antd';
import { useState } from 'react';

const selectArray = heroArray.map(item => {
	return {
		...item,
		label: item.name,
		value: item.name,
	};
});

function getImageUrl(imgName: string) {
	return new URL(`../../images/xbbcq/hero/${imgName}`, import.meta.url).href;
}

export default function TabPkRecommend() {
	const [heros, setHeroes] = useState<string[]>([]);
	const [recommendHeroes, setRecommendHeroes] = useState<string[][]>([[]]);

	const handleChange = (value: string[]) => {
		if (value.length <= 5) {
			setHeroes(value);
			setRecommendHeroes([[]]);

			if (value.length === 5) {
				// 推荐阵容
				setRecommendHeroes(findRecommendList(value));
			}
		}
	};

	return (
		<>
			<Select
				mode="multiple"
				allowClear
				style={{ width: '100%' }}
				placeholder="Please select"
				value={heros}
				onChange={handleChange}
				options={selectArray}
				filterOption={(inputValue, option) => {
					return (
						option?.name.indexOf(inputValue) !== -1 ||
						option?.name2.indexOf(inputValue) !== -1 ||
						(option?.name3?.indexOf(inputValue) !== undefined &&
							option?.name3?.indexOf(inputValue) !== -1) ||
						(option?.name4?.indexOf(inputValue) !== undefined &&
							option?.name4?.indexOf(inputValue) !== -1)
					);
				}}
			/>
			<Divider />
			<h2>敌方阵容</h2>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					flexDirection: 'row',
				}}
			>
				{heros.map(heroName => {
					return (
						<img
							key={heroName}
							src={getImageUrl(findHeroImg(heroName))}
							style={{
								width: 64,
								height: 64,
								marginRight: 20,
							}}
						/>
					);
				})}
			</div>
			<Divider />
			{recommendHeroes[0].length ? (
				<>
					<h2>推荐阵容</h2>
					{recommendHeroes.map(heros => {
						return (
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									flexWrap: 'wrap',
                                    marginTop: 20,
								}}
							>
								{heros.map(heroName => {
									return (
										<img
											key={heroName}
											src={getImageUrl(findHeroImg(heroName))}
											style={{
												width: 64,
												height: 64,
												marginRight: 20,
											}}
										/>
									);
								})}
							</div>
						);
					})}
				</>
			) : <h2>暂无推荐阵容</h2>}
		</>
	);
}
