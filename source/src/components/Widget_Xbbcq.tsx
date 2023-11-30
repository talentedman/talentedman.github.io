import { heroArray } from '@/services/xbbcq_service';
import { Col, Divider, Row, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

function getImageUrl(imgName: string) {
	return new URL(`../images/xbbcq/hero/${imgName}`, import.meta.url).href;
}

export default function Widget_Xbbcq() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				flexWrap: 'wrap',
				width: '100%',
			}}
		>
			{heroArray.map((hero, index) => {
				return (
					<div
						key={hero.name}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
                            marginRight: 10,
						}}
					>
						<img src={getImageUrl(hero.imgName)} alt="" />
						<h2>{hero.name}</h2>
					</div>
				);
			})}
		</div>
	);
}
