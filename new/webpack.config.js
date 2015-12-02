var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: './dist',
        publicPath: './dist/',
        filename: '[name].build.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            jquery: "jquery",
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                loader: 'url-loader?limit=2&name=images/[hash].[ext]',
            },
            {
                test: require.resolve("./libs/marked.min.js"),
                loader: "exports?marked"
            },
            {
                test: require.resolve("./libs/prettify.min.js"),
                loader: "exports?prettyPrint"
            },
            {
                test: require.resolve("./libs/underscore.min.js"),
                loader: "exports?_"
            },
            {
                test: require.resolve("./libs/editormd.min.js"),
                loader: "exports?editormd"
            },
            {test: require.resolve('./libs/jquery.min.js'), loader: 'exports?jquery'},
            //{test: require.resolve('jquery-slimscroll'), loader: 'imports?jQuery'},

        ]
    }
}
//http://stackoverflow.com/questions/30522896/how-to-shim-tinymce-in-webpack
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}
