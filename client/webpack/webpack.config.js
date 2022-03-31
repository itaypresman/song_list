const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const prod_conf = require('./prod');
const dev_conf = require('./dev');


const base_conf = {
    mode: process.env.mode,
    entry: ['babel-polyfill', path.resolve(__dirname, '../src/index.js')],

    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: './bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loader: 'file-loader',
                options: {
                    path: 'img'
                }
            },
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            favicon: './public/img/favicon.ico',
            inject: false,
        }),
        new Dotenv({
            allowEmptyValues: true,
            systemvars: true,
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, '..', 'public', 'js'),
        //             to: path.resolve(__dirname, '..', 'dist', 'js')
        //         },
        //     ],
        // }),
    ],

    resolve: {
        alias: {
            '@Components': path.resolve(__dirname, '..', 'src', 'components', 'common'),
            '@Libs': path.resolve(__dirname, '..', 'src', 'libs'),
            '@Services': path.resolve(__dirname, '..', 'src', 'services'),
            '@Store': path.resolve(__dirname, '..', 'src', 'store'),
            '@Styles': path.resolve(__dirname, '..', 'src', 'styles'),
            '@Public': path.resolve(__dirname, '..', 'public'),
        }
    }
};

module.exports = process.env.mode === 'production'
    ? merge(base_conf, prod_conf)
    : merge(base_conf, dev_conf);
