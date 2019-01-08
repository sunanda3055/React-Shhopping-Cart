const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./index.js',
    mode:'none',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build'),
        publicPath: '/',
    },
    optimization: {
        splitChunks:{
            cacheGroups: {
                node_vendors:{
                    test:/[\\/]node_modules[\\/]/,
                    name:'vendor',
                    chunks: "all"
                }
            }
        }
    },
    module:{

        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
        ]



    },
    plugins:[
        new HtmlWebpackPlugin({template:'./index.html'})
    ],
    devServer: {
        // host: '0.0.0.0',
        //disableHostCheck: true,
        historyApiFallback: true,
    },

}