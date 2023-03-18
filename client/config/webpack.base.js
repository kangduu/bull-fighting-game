const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const isEnvDevelopment = process.env.NODE_ENV === 'development';

// link: https://juejin.cn/post/7111922283681153038#heading-21
module.exports = {
	entry: path.join(__dirname, '../src/index.tsx'),
	output: {
		filename: 'static/js/[name].[chunkhash:8].js', // 每个输出js的名称
		path: path.join(__dirname, '../dist'), // 打包结果输出路径
		clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
		publicPath: '/', // 打包后文件的公共前缀路径
	},
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, '../src')],
				test: /.tsx?$/,
				use: ['babel-loader'],
			},
			{
				test: /.(css|less)$/,
				include: [path.resolve(__dirname, '../src')],
				exclude: [/.module.(css|less)$/],
				use: [
					// 开发环境使用style-loader,打包模式抽离css
					isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'less-loader',
				],
			},
			{
				test: /.module.(css|less)$/,
				include: [path.resolve(__dirname, '../src')],
				use: [
					isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							modules: {
								auto: resourcePath => resourcePath.endsWith('.less'), // 匹配.less文件来进行css模块化。
								localIdentName: '[local]_[hash:base64:6]',
							},
						},
					},
					'postcss-loader',
					'less-loader',
				],
			},
			{
				test: /.svg$/,
				use: ['@svgr/webpack', 'url-loader'],
			},
			{
				test: /.(png|jpg|jpeg|gif)$/, // 匹配图片文件
				type: 'asset', // type选择asset
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, // 小于10kb转base64位
					},
				},
				generator: {
					filename: 'static/images/[name].[contenthash:8][ext]', // 文件输出目录和命名
				},
			},
			{
				test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
				type: 'asset', // type选择asset
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, // 小于10kb转base64位
					},
				},
				generator: {
					filename: 'static/fonts/[name].[contenthash:8][ext]', // 文件输出目录和命名
				},
			},
			{
				test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
				type: 'asset', // type选择asset
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, // 小于10kb转base64位
					},
				},
				generator: {
					filename: 'static/media/[name].[contenthash:8][ext]', // 文件输出目录和命名
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			inject: true, // 自动注入静态资源
		}),
		// https://www.webpackjs.com/plugins/define-plugin#root
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		}),
	],
	cache: {
		type: 'filesystem',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: { '@': path.resolve(__dirname, '../src') },
		modules: [path.resolve(__dirname, '../node_modules')], // 查找第三方模块只在本项目的node_modules中查找
	},
};
