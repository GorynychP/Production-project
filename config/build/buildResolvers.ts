import { ResolveOptions } from 'webpack';
import { BuildOptions } from './type/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	};
}

// fallback: {
// 			fs: false,
// 			tls: false,
// 			net: false,
// 			path: false,
// 			zlib: false,
// 			stream: false,
// 			crypto: false,
// 			url: false,
// 			assert: false,
// 			util: false,
// 			http: require.resolve('node-fetch/'),
// 			https: require.resolve('node-fetch/'),
// 			'node-fetch': require.resolve('node-fetch'),
// 			'whatwg-url': require.resolve('node-fetch/'),
// 			encoding: require.resolve('memfs/'),
// 			buffer: require.resolve('memfs/'),
// 			process: require.resolve('memfs/'),
// 			i18next: require.resolve('i18next'),
// 			events: require.resolve('events/'),
// 			'react-i18next': require.resolve('react-i18next'),
// 			'html-entities': require.resolve('html-entities'),
// 			'html-parse-stringify': require.resolve('html-parse-stringify'),
// 			'cross-fetch': require.resolve('cross-fetch'),
// 			'@reduxjs/toolkit': require.resolve('@reduxjs/toolkit'),
// 			'react-redux': require.resolve('react-redux'),
// 			'redux-thunk': require.resolve('redux-thunk'),
// 			redux: require.resolve('redux'),
// 			reselect: require.resolve('reselect'),
// 			'hoist-non-react-statics': require.resolve('hoist-non-react-statics'),
// 		},
