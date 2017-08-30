var webpack = require('webpack');
var path = require('path');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, './'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    /*
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },*/
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader', 'babel-loader']
        },
        { test: /\.json$/, loader: "json-loader" },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.css$/,
            loaders: [
              'style-loader?sourceMap',
              'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ],
        }
        ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            'process.env':{
            'NODE_ENV': JSON.stringify('production')
           }
        }),
        
        new webpackUglifyJsPlugin({
          cacheFolder: path.resolve(__dirname, 'public/cached_uglify/'),
          debug: true,
          minimize: true,
          sourceMap: false,
          output: {
            comments: false
          },
          compressor: {
            warnings: false
          }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
    ]
};

