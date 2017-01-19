let webpack           = require('webpack'),
	htmlwebpackplugin = require('html-webpack-plugin'),
	path              = require('path');


let ROOT       = path.resolve(__dirname),
	APP_PATH   = path.resolve(ROOT, 'app'),
	BUILD_PATH = path.resolve(ROOT, 'build');

module.exports = {
	entry     : {
		app     : path.resolve(APP_PATH, 'app.js'),
		vendors : ['react', 'react-dom', 'react-router']
	},
	output    : {
		path     : BUILD_PATH,
		filename : 'build.js'
	},
	module    : {
		loaders : [
			{
				test    : /\.js?$/,
				loader  : 'babel-loader',
				exclude : /node_modules/,
				query   : {
					compact : false,
					presets : ['es2015', 'react', 'stage-0']
				}
			},
			{
				test   : /\.scss?$/,
				loader : 'style!css!sass!autoprefixer?{browsers:["last 2 version","ios 7",">1%"]}',
			},

			{
				test : /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader : 'url-loader?limit=50000&name=[path][name].[ext]'
			}
		]
	},
	devServer : {
		historyApiFallback : true,
		hot                : true,
		inline             : true,
		progress           : true,
	},

	plugins : [
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new htmlwebpackplugin({
			title : '【华南师范大学】广州室内设计培训|室内设计培训|装修|室内设计学校'
		})
	],

}