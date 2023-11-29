function getImageUrl(imgName: string) {
	return new URL(`../images/xbbcq/hero/${imgName}`, import.meta.url).href;
}

export const aaa = () => getImageUrl('AM.jpg');
