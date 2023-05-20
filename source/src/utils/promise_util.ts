export function delayResolve<T>(timeout: number, data?: T): Promise<T | undefined> {
	return new Promise<T | undefined>(function (resolve) {
		setTimeout(function () {
			resolve(data);
		}, timeout);
	});
}
