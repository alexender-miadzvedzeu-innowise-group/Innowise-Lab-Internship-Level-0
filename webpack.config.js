const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/js/script.js',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
			},
			{ test: /\.(js)$/, use: 'babel-loader' },
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'My App',
			template: 'src/index.html',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
