// vconsole 在%c后面需要加空格才能显示样式  原生的控制台不用
export function vLog(tag: string, message: any, ...params: any[]) {
	console.info(
		`%c ${tag}`,
		'color:#ffffff; background:#1890ff; padding: 1px 4px; border-radius: 3px;',
		message,
		...params
	);
}

export function vWarn(tag: string, message: any, ...params: any[]) {
	console.info(
		`%c ${tag}`,
		'color:#ffffff; background:#ffa500; padding: 1px 4px; border-radius: 3px;',
		message,
		...params
	);
}

export function vError(tag: string, message: any, ...params: any[]) {
	console.info(
		`%c ${tag}`,
		'color:#ffffff; background:#ff2040; padding: 1px 4px; border-radius: 3px;',
		message,
		...params
	);
}
