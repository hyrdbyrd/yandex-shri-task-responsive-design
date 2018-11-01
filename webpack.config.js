const path = require('path');

const DIST_PATH = path.join(__dirname, 'dist');
const SRC_PATH = path.join(__dirname, 'src');

module.exports = {
    entry: {
        bundle: path.join(SRC_PATH, 'index.ts'),
        media: path.join(SRC_PATH, 'scripts/media.ts'),
        flux: path.join(SRC_PATH, 'scripts/flux.ts')
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|ts)$/,
                use: [
                    // 'tslint-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            onlyCompileBundledFiles: true
                        }
                    }
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
                test: /\.(jpe?g|gif|png|woff|ttf|wav|mp3|mp4)$/,
                loader: 'file-loader'
            }
        ],
    }
};
