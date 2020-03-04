/**
 * Created by chenhaiyang on 2019/12/2.
 */
const path = require('path');
const webpack = require('webpack');
// 插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 可以操作html文件
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 用于拷贝

const rootPath = './';

module.exports = [{
    // __dirname 表示当前项目根目录
    context: __dirname,
    // 入口文件
    entry: {
        app: rootPath + 'app.js'
    },
    // 打包输出文件配置
    output: {
        // [name] 对应的是底部使用 CommonsChunkPlugin插件的name
        filename: '[name].js',
        // 打包文件输出目录dist
        path: path.resolve(__dirname, 'dist'),

        // Needed  for multiline strings
        sourcePrefix: ''
    },
    amd: {
        // Enable webpack-friendly use of require in
        toUrlUndefined: true
    },
    node: {
        // Resolve node module use of fs
        fs: "empty"
    },
    // 插件来处理指定文件，下边处理css文件和图片附件等
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|gif|jpg|jpeg|svg|xml|json|gltf)$/,
            use: ['url-loader']
        },{
            test: /\.js$/,
            include:[
                path.resolve(__dirname, "node_modules/@supermap/iclient-common"),
                path.resolve(__dirname, "node_modules/@supermap/iclient-mapboxgl"),
                // 由于iClient对Elasticsearch的API进行了封装而Elasticsearch也使用了ES6的语法
                path.resolve(__dirname, "node_modules/elasticsearch")
            ],
            loader: 'babel-loader?presets=es2015',
            options: {
                presets: ['env']
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: rootPath + 'index.html'
        }),
        // 复制文件或者目录
        // Copy Assets, Widgets, and Workers to a static directory
        /*  new CopyWebpackPlugin([
         {from: 'test/lib', to: 'lib'},
         {from: 'src/SourceData', to: 'SourceData'}
         ]), */
        new webpack.DefinePlugin({
            // Define relative base path in  for loading assets
            _BASE_URL: JSON.stringify('')
        }),
        // 分割代码为单个bundle，提取公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'giscafer', // name是指定打包后的代码文件名称，自己随意取
            minChunks: function (module) {
                return module.context && module.context.indexOf('giscafer') !== -1;
            }
        })
    ],

    // development server options
    devServer: {
        contentBase: path.join(__dirname, "dist")
    }
}];