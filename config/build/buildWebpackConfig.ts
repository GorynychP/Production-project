import webpack from 'webpack';
import { BuildOptions } from './type/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { mode, paths, isDev } = options;

	return {
		mode,
		entry: paths.entry, // путь стартовой точки приложения (главный tsx, jsx файл)
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build, // путь билда
			clean: true, // служит для очищение лишиних билдеров
			publicPath: '/',
		}, // настройки куда и как мы будем делать сборку приложения
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
