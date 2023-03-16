const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// link: https://juejin.cn/post/7111922283681153038#heading-21
module.exports = {
	entry: path.join(__dirname, '../src/index.tsx'),
	output: {
		filename: 'static/js/[name].js', // 每个输出js的名称
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
				test: /.css$/,
				include: [path.resolve(__dirname, '../src')],
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /.less$/,
				include: [path.resolve(__dirname, '../src')],
				use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
			},
			{
				test: /.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
				type: 'asset', // type选择asset
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, // 小于10kb转base64位
					},
				},
				generator: {
					filename: 'static/images/[name][ext]', // 文件输出目录和命名
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
					filename: 'static/fonts/[name][ext]', // 文件输出目录和命名
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
					filename: 'static/media/[name][ext]', // 文件输出目录和命名
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			inject: true, // 自动注入静态资源
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
