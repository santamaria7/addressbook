const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: "production",
    entry: {
        client:['./src/js/index.js']
    },
    output: {
        filename: "[name].min.js",
        path: path.join(__dirname, "/public/"),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            components: path.resolve(__dirname, '..', 'src/components'),
        }
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Address Book',
            meta:{
                viewport:'width=device-width,initial-scale=1.0'
            },
            filename: 'index.html',
            template:'./src/index.html'
        })],
    devServer: {
        contentBase: './public'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [[
                        "@babel/preset-env",
                        {
                            "modules": false
                        }
                    ],'@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-proposal-object-rest-spread',
                        "@babel/plugin-syntax-dynamic-import"
                        ]
                }
            },
            {
                test: /\.ts(x)?$/,
                use: [
                    'awesome-typescript-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader', {
                    loader: "postcss-loader",
                    options: {
                        plugins: () => [require("autoprefixer")({ grid: true }),
                            require('cssnano')({preset: 'default'})
                        ],
                        minimize: true
                    },
                }, {
                        loader: 'sass-loader',
                        options: {
                            data: `
                            @import "src/css/partials/_variables";`
                        }
                    }]
            },
            {
                test: /\.(ttf|eot|otf|svg|png|jpg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader'
            }
        ]
    }
};