const path = require('path');
const { merge } = require('webpack-merge');
const BaseWebpackConfig = require('./webpack.base.js');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(BaseWebpackConfig, {
	mode: 'production',
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, '../public'),
					to: path.resolve(__dirname, '../dist'),
					filter: source => {
						return !source.includes('index.html'); // 忽略index.html
					},
				},
			],
		}),
	],
});
