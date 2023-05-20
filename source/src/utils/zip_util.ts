import { message } from 'antd';
import { RcFile } from 'antd/lib/upload';
import JsZip from 'jszip';

function _loadImagePromise(
	flashData: JsZip,
	flashName: string,
	filePath: string
): Promise<HTMLImageElement | null> {
	return new Promise(async function (resolve: (image: HTMLImageElement | null) => void) {
		const imgBase64 = await flashData.file(`${flashName}/${filePath}`)?.async('base64');
		const suffixName = filePath.split('.')[0];
		const imgUrl = `data:image/${suffixName};base64,${imgBase64}`;
		const img = new Image();
		img.src = imgUrl;
		img.onload = function () {
			resolve(img);
		};
		img.onerror = function () {
			console.error(`[FLASH] load image failed filePath:${filePath}`);
			resolve(null);
		};
	});
}

// async function _httpGetZipArrayBuffer(flashFilePath: string) {
// 	try {
// 		const ret = await fetch(flashFilePath);
// 		const statusCode = ret.status;
// 		if (statusCode !== 200) {
// 			console.warn(`请求flajson文件失败  url = ${flashFilePath}`);
// 			return null;
// 		}
// 		const zipFlashData = await ret.arrayBuffer();
// 		// localStorage.setItem(`flash__${flashFilePath}`, flaJsonStr)
// 		if (!zipFlashData) return null;
// 		return zipFlashData;
// 	} catch (e) {
// 		console.warn("fetch err : ", e, `url = ${flashFilePath}`);
// 		return null;
// 	}
// }

async function _readJsonFile(flaJsonStr?: string) {
	if (!flaJsonStr) return null;
	let data;
	try {
		data = JSON.parse(flaJsonStr);
	} catch (e) {
		console.error(`[flash] parse error flaJsonStr:${flaJsonStr}`, e);
		return null;
	}
	if (!data) {
		console.error(`[flash] jsonstring to FlashJsonVo null flaJsonStr:${flaJsonStr}`);
		return null;
	}
	return data;
}

/**
 * 加载flash配置和贴图
 * @param flashFilePath
 * @param loadTexutresTimeout < 0 表示等待加载完成； == 0 表示 不等待加载完成； > 0 表示等待一段时间（单位：毫秒）
 * @param replaceTexture 替换的贴图
 * @returns
 */
export async function checkFlashZip(checkFile: RcFile) {
	let flashData: JsZip;
	try {
		flashData = await new JsZip().loadAsync(checkFile);
	} catch (e) {
		alert(`加载zip资源失败 error = ` + e);
		return false;
	}
	if (!flashData.files) {
		alert(`加载zip资源失败`);
		return false;
	}

	let flajsonName: string = ''; // __xxx.flajson
	for (let fileKey in flashData.files) {
		// console.log('fileKey == ', fileKey)
		if (fileKey.indexOf('.flajson') !== -1) {
			flajsonName = fileKey;
			break;
		}
	}
    if (!flajsonName) {
        alert(`缺少.flajson文件`);
        return false;
    }
    if (flajsonName.indexOf('/') !== -1) {
        alert(`.flajson文件层级有问题, 应该在第一层级`);
        return false;
    }
    if (flajsonName.indexOf('__') === -1) {
        alert(`.flajson文件格式错误, 应该以__为前缀`);
        return false;
    }
	const flashName = flajsonName.replace('__', '').replace('.flajson', '');
	console.log('flajsonName == ', flajsonName);
    console.log('flashName == ', flashName);

	const flaJsonStr = await flashData.file(flajsonName)?.async('text');
	if (!flaJsonStr) {
		alert(`读取文件内容失败 : ` + flajsonName);
		return false;
	}
	const movieData = await _readJsonFile(flaJsonStr);
	if (!movieData) {
		alert(`flajson资源json化失败`);
		return false;
	}
    console.log(movieData);
    const textures = movieData.textures;
    if (!textures || textures.length === 0) {
        alert(`flajson配置文件textures字段不对`);
        return false;
    }
    const errorImgs = [];
    for (let i = 0; i < textures.length; i++) {
        const filePath = textures[i];

        const bLoadImgSuc = await _loadImagePromise(flashData, flashName, filePath);
        if (!bLoadImgSuc) {
            errorImgs.push(filePath);
        }
    }
    if (errorImgs.length) {
        alert('加载图片失败' + errorImgs.join(' '));
        return false;
    }
	
    message.success('文件检验通过');
	return true;
}
