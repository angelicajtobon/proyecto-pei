const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path")

module.exports ={
	plugins :[
	new HtmlWebpackPlugin()
	]

	entry: {
		entrada1: "./js/app.js",
		entrada2: "./js/appService.js",
		entrada3: "./js/datospei.js",
		entrada4: "./js/generar.js",
		entrada5: "./js/usuarios.js"
	}

	output: {
		path: path.resolve(--dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/dist",
	}
}