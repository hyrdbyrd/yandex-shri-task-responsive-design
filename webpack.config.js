const path = require('path');

const DIST_PATH = path.join(__dirname, 'dist');
const SRC_PATH = path.join(__dirname, 'src');

const POSTCSS = {
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
};

const browserConfig = {
    entry: {
        media: path.join(SRC_PATH, 'components/Video/Media.ts'),
        bundle: path.join(SRC_PATH, 'client/index.tsx'),
    },
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] },
    output: {
        path: DIST_PATH,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(svg|gif|jpe?g|png)$/,
                loader: 'file-loader',
                options: {
                    name: path.join(DIST_PATH, '/assets/[name].[ext]'),
                    publicPath: url => url.replace(/dist/, '')
                }
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: [
                    'awesome-typescript-loader'
                ]
            },
            {
                test: /\.(s|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    POSTCSS
                ]
            }
        ]
    }
}

const serverConfig = {
    entry: path.join(SRC_PATH, 'server/server.tsx'),
    target: 'node',
    resolve: { extensions: [".ts", ".tsx", ".js", ".jsx", ".json"] },
    output: {
        path: path.resolve(__dirname, '.'),
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.(svg|gif|jpe?g|png)$/,
                loader: 'file-loader',
                options: {
                    name: path.join(DIST_PATH, '/assets/[name].[ext]'),
                    publicPath: url => url.replace(/dist/, ''),
                    emit: false
                }
            },
            {
                exclude: /node_modules/,
                test: /\.(js|ts)x?$/,
                use: [
                    'awesome-typescript-loader'
                ]
            },
            {
                test: /\.sss$/,
                use: [
                    'css-loader/locals',
                    POSTCSS
                ]
            }
        ],
    }
};

module.exports = [browserConfig, serverConfig];
