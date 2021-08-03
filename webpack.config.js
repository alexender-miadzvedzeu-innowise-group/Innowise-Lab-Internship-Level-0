const path = require('path');

module.exports = {
	entry: ['./src/js/index.js'],
	output: {
		path: path.join(__dirname, './dist'),
		filename: './js/bundle.js',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{ test: /\.svg$/, use: 'svg-inline-loader' },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.(js)$/, use: 'babel-loader' },
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[index].bundle.js',
	},
	plugins: [],
};
