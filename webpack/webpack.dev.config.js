const webpack = require('webpack');
const path = require('path');

const parentDir = path.join(__dirname, '../');

const PATHS = {
  root: path.join(__dirname),
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist')
}

var CopyWebpackPlugin = require('copy-webpack-plugin');

/*
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
*/
module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        loaders: [
        	{
            	test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "less-loader", // compiles Less to CSS
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },

            /*
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                loader: 'url-loader?limit=10000000&name=/[path][name].[ext]',
                include: PATHS.app + '/images'
            },*/
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: [
                'file-loader',
                {
                  loader: 'image-webpack-loader',
                  options: {
                    bypassOnDebug: true,
                  },
                },
              ],
            }
            
        ]
    },
    //plugins: [
    //    extractLess
    //],
    context: path.join(__dirname, 'map-tool'),
    plugins: [
        new CopyWebpackPlugin([
            {
                from: '../../images',
                to: '/images'
            },
        ],
        { debug: 'info'})
    ],
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}