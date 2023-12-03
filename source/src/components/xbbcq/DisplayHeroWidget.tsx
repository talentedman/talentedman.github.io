import React from "react";

function getImageUrl(imgName: string) {
	return new URL(`../../images/xbbcq/hero/${imgName}`, import.meta.url).href;
}

export const DisplayHeroWidget: React.FC<{ heroArray: any[]; title: string }> = ({ heroArray, title }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				width: '100%',
			}}
		>
			<h2>{title}</h2>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					alignItems: 'center',
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
		</div>
	);
};