const path = require('path');
const DIST_PATH = path.join(__dirname, 'dist');

module.exports = {
    mode: 'development',
    watch: true,
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: DIST_PATH,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.sss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            parser: 'sugarss',
                            plugins: loader => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('autoprefixer')({
                                    stage: 2,
                                    browsers: ['ie >= 10', 'last 2 version']
                                }),
                                require('precss'),
                                require('postcss-assets')({
                                    basePath: DIST_PATH,
                                    loadPaths: ['assets/']
                                }),
                                require('postcss-preset-env')({
                                    stage: 2,
                                    browsers: ['ie >= 10', 'last 2 version']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(pug|jade)$/,
                use: ['pug-loader']
            },
            {
                test: /\.(jpe?g|gif|png|woff|ttf|wav|mp3|mp4)$/,
                use: ['file-loader']
            }
        ]
    }
};