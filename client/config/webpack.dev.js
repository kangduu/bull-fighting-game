const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const BaseWebpackConfig = require('./webpack.base.js');

module.exports = merge(BaseWebpackConfig, {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map', // 源码调试模式
	devServer: {
		port: 3000,
		compress: true,
		hot: true,
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, 'public'),
		},
	},
	plugins: [new ReactRefreshWebpackPlugin()],
});
