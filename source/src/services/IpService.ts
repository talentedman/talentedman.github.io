/**
 * 获取国内ip
    city: '广州';
    country: '中国';
    country_code: 'CN';
    distinct: '天河区';
    full_ip: '113.66.104.75';
    ip: '113.66.104.75';
    isp: '电信';
    lat: '23.12467';
    lon: '113.36112';
    net_str: '中国电信';
    operator: '电信';
    province: '广东';
 */
export interface IDomesticIp {
	city: string;
	country: string;
	country_code: string;
	distinct: string;
	full_ip: string;
	ip: string;
	isp: string;
	lat: string;
	lon: string;
	net_str: string;
	operator: string;
	province: string;
}
export async function getDomesticIp(): Promise<IDomesticIp | null> {
	try {
		const ret = await fetch('https://forge.speedtest.cn/api/location/info');
		if (200 !== ret.status) return null;
		const retJson = await ret.json();
		return retJson;
	} catch (e) {
		return null;
	}
}

export async function getDomesticIp2(): Promise<string | null> {
	try {
		const ret = await fetch('https://cf-ns.com/cdn-cgi/trace');
		if (200 !== ret.status) return null;
		const text = await ret.text();
		const splitArr = text.split('\n');

		let resultIp = '';
		for (let i = 0; i < splitArr.length; i++) {
			const val = splitArr[i];
			if (val.indexOf('ip=') !== -1) {
				resultIp = val.split('=')[1];
				break;
			}
		}
		return resultIp;
	} catch (e) {
		console.log('getDomesticIp2 == ', e);
		return null;
	}
}

/**
 * 获取海外ip
    asn: 146961;
	asn_organization: 'NEXET LIMITED';
	city: 'Kowloon';
	continent_code: 'AS';
	country: 'Hong Kong';
	country_code: 'HK';
	ip: '103.172.80.125';
	isp: 'Nexet Limited';
	latitude: 22.3356;
	longitude: 114.1847;
	offset: 28800;
	organization: 'Nexet Limited';
	region: 'Kowloon City';
	region_code: 'KKC';
	timezone: 'Asia/Hong_Kong';
 */

export interface IOverseasIp {
	asn: number;
	asn_organization: string;
	city: string;
	continent_code: string;
	country: string;
	country_code: string;
	ip: string;
	isp: string;
	latitude: number;
	longitude: number;
	offset: number;
	organization: string;
	region: string;
	region_code: string;
	timezone: string;
}

export async function getOverseasIp(): Promise<IOverseasIp | null> {
	try {
		const ret = await fetch('https://api.ip.sb/geoip');
		if (200 !== ret.status) return null;
		const retJson = await ret.json();
		return retJson;
	} catch (e) {
		return null;
	}
}
