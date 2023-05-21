export default class UpUp {
	params: {
		containerDiv: HTMLDivElement; // 渲染最终图片的区块
		text: string; // 必传的文字 dom
		color: string; // 字体的颜色
		left: number; // 第一行图片的整体向右的偏移量，如果设置此参数则图片排列的位置是居左200开始，否则是从0开始
		bgColor: string; // 背景的颜色
		imgObj: {
			imgLD: number; // 小人图向左的偏移量
			imgBD: number; // 小人图向下的偏移量
			left: number;
		};
		textObj: {
			width: number; // 文字画布的宽度
			height: number; // 文字画布的高度
			textRD: number; // 文字向右的偏移量
			textBD: number; // 文字向下的偏移量
		};
	};
	timer: NodeJS.Timeout | null = null;

	constructor(containerDiv: HTMLDivElement) {
		this.params = {
			containerDiv: containerDiv, // 渲染最终图片的区块
			text: '', // 必传的文字
			color: '#42240f', // 字体的颜色
			left: 0, // 第一行图片的整体向右的偏移量，如果设置此参数则图片排列的位置是居左200开始，否则是从0开始
			bgColor: 'transparent', // 背景的颜色
			imgObj: {
				imgLD: 35, // 小人图向左的偏移量
				imgBD: 20, // 小人图向下的偏移量
				left: 45, // 小人图整体阶级向左的偏移量
			},
			textObj: {
				width: 40, // 文字画布的宽度
				height: 40, // 文字画布的高度
				textRD: 20, // 文字向右的偏移量
				textBD: 10, // 文字向下的偏移量
			},
		};
	}

	beginDrag(content: string, bgColor: string, textColor: string) {
		if (this.timer) {
			clearTimeout(this.timer);
		}
		this.timer = setTimeout(() => {
			this.draw(content, bgColor, textColor);
		}, 100);
	}

	draw(content: string, bgColor: string, textColor: string) {
		let self = this;
		if (!content) return;
		self.params.text = content;
		self.params.bgColor = bgColor;
		self.params.color = textColor;
		const text = self.params.text.split('\n');
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		canvas.width = 1920;
		canvas.height = 980;

		// 给画布填充颜色
		ctx.fillStyle = self.params.bgColor;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		const arr: any[] = [];
		let len = 0;
		const imgWidthAndHeight: { x: any; y: any }[] = [];
		text.forEach((item: string, i: number) => {
			// 1. 加载图片资源
			self.loadImg(item.split(''), function (res) {
				// 关键代码：如果使用了 arr.push(res) 回导致输出的索引跟填写的文字顺序不一致的情况
				// 所以直接使用赋值的方式，固定图片数组输出的位置，这里要保证输出的顺序，
				// 其他情况不需要就可以使用push， 下面的获取图片同理
				arr[i] = res;
				// 保证所有的图片都已加载完成，并且数据都有
				if (++len == text.length) {
					len = 0;
					arr.forEach(function (item, index) {
						var distance = arr.length - index - 1;
						item.forEach(function (its: { image: any; text: any }, idx: number) {
							var it = its.image;
							var tx = its.text;
							if (tx === ' ' && ++len) return;
							if (self.params.left) {
								var x =
									self.params.left +
									(idx * it.naturalWidth - idx * self.params.imgObj.imgLD) -
									index * self.params.imgObj.left;
							} else {
								var x =
									idx * it.naturalWidth -
									idx * self.params.imgObj.imgLD +
									distance * 45;
							}
							var y =
								index * (it.naturalHeight * 0.3) + idx * self.params.imgObj.imgBD;
							// 把图片的宽高保存
							imgWidthAndHeight.push({
								x: x + it.naturalWidth,
								y: y + it.naturalHeight,
							});
							// 2. 在canvas 上画出所有的图片
							ctx.drawImage(it, x, y, it.naturalWidth, it.naturalHeight);
							// 3. 在canvas 上画出所有的文字
							self.drawText(
								tx,
								self.params.textObj.width,
								self.params.textObj.height,
								function (img) {
									ctx.drawImage(
										img,
										x + self.params.textObj.textRD,
										y + self.params.textObj.textBD
									);
									// 4. 等所有的文字画完之后再输出图片
									if (++len === text.join('').length) {
										var width = Math.max.apply(
											null,
											imgWidthAndHeight.map(function (item) {
												return item.x;
											})
										);
										var height = Math.max.apply(
											null,
											imgWidthAndHeight.map(function (item) {
												return item.y;
											})
										);
										// 改变大小前用getImageData保存图像
										var copyCanvas = ctx.getImageData(
											0,
											0,
											canvas.width,
											canvas.height
										);
										canvas.width = width;
										canvas.height = height;
										// 改变了宽高之后再重新设置之前的图像
										ctx.putImageData(copyCanvas, 0, 0);

										// 显示出来
										self.params.containerDiv.innerHTML = '';
										self.params.containerDiv.appendChild(canvas);
									}
								}
							);
						});
					});
				}
			});
		});
	}

	private loadImg(
		urls: string[],
		callback: { (res: any): void; (arg0: { image: HTMLImageElement; text: string }[]): void }
	) {
		let self = this;
		let len = 0;
		let imgs: { image: HTMLImageElement; text: string }[] = [];
		urls.forEach(function (item, index) {
			const image = new Image();
			const url = self.getImageUrl();
			image.onload = function () {
				imgs[index] = {
					image: image,
					text: item,
				};
				if (++len === urls.length) {
					callback(imgs);
				}
			};
			image.src = url;
		});
	}

	private drawText(
		word: string,
		width: number,
		height: number,
		callback: { (img: any): void; (arg0: HTMLImageElement): void }
	) {
		const canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		ctx.transform(0.766044, 0.3, -0.742788, 0.766044, 20, 0);
		ctx.font = '30px SimHei';
		ctx.textAlign = 'center';
		ctx.fillStyle = this.params.color;
		ctx.fillText(word, 14, 28);

		// 这里本来设置是返回的 getImageData 的，但是发现在使用canvas
		// 堆叠到另一个canvas中背景一直设置不到的透明
		// 因为另一个的canvas中添加了一个图片，而图片是颜色的，会导致文字的canvas一直是有底色的
		// 没办法，索性使用导出图片的方式保证透明，如果是canvas就不能保证是透明
		const img = new Image();
		img.onload = function () {
			callback(img);
		};
		img.src = canvas.toDataURL('image/png');
	}

	private getImageUrl() {
		return new URL(
			`../images/upup/upupimg_${Math.floor(Math.random() * 40)}.png`,
			import.meta.url
		).href;
	}
}
