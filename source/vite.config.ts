import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	return {
		plugins: [
			react(),
			createStyleImportPlugin({
				resolves: [AntdResolve()],
				libs: [
					// 引入AntD4样式
					{
						libraryName: 'antd4',
						esModule: true,
						resolveStyle: name => {
							// vite开发模式下，此处路径需要额外加node_modules，很奇怪，暂时没有深究原因
							return `node_modules/antd4/es/${name}/style/index`;
						},
					},
				],
			}),
		],
		base: './',
		server: {
			host: '0.0.0.0',
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		css: {
			preprocessorOptions: {
				less: {
					// 更改主题
					modifyVars: {
						'primary-color': '#1890ff',
					},
					javascriptEnabled: true,
				},
			},
		},
		build: {
			//构建后是否生成 source map 文件
			sourcemap: false,
			// target: 'es2020',
			emptyOutDir: true,
			outDir: 'dist',
			cssCodeSplit: true,
			assetsDir: 'static',
			rollupOptions: {
				// js css 还有其它资源拆成不同的文件夹打包
				output: {
					manualChunks(id) {
						if (id.includes('node_modules')) {
							const thirdName = id.toString().split('node_modules/')[1].split('/')[0];
							switch (thirdName) {
								case 'video.js':
									return thirdName;
							}
							return 'vendor';
						}
					},
					// chunk 文件名
					chunkFileNames: 'static/js/[name]-[hash].js',
					// 入口文件名
					entryFileNames: 'static/js/[name]-[hash].js',
					// 资源文件名
					assetFileNames: chunkInfo => {
						// let subDir = 'images';
						// if (path.extname(chunkInfo.name) === '.css') {
						//	// 用这种模式css引用的图片资源路径有问题???
						// 	subDir = 'css';
						// }
						// return `${subDir}/[name]-[hash].[ext]`;
						return `static/assets/[name]-[hash].[ext]`;
					},
				},
			},
		},
	};
});
