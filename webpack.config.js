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
            }),
            require('postcss-css-to-bem-css')({
                sourceNaming: 'origin',
                targetNaming: 'react'
            })
        ]
    }
};

const FILELOADER = {
    test: /\.(svg|gif|jpe?g|png)$/,
    loader: 'file-loader',
    options: {
        name: path.join(DIST_PATH, '/assets/[name].[ext]'),
        publicPath: url => url.replace(/dist/, '')
    }
};

const TSLOADER = {
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: [
        'awesome-typescript-loader'
    ]
};

const browserConfig = {
    entry: {
        media: path.join(SRC_PATH, 'components/common/Video/Media.ts'),
        'bundle@desktop': path.join(SRC_PATH, 'components/desktop/index.tsx'),
        'bundle@mobile': path.join(SRC_PATH, 'components/mobile/index.tsx')
    },
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'] },
    output: { path: DIST_PATH, filename: '[name].js'},
    module: {
        rules: [
            FILELOADER, TSLOADER,
            {
                test: /\.(s|c|l)(a|e|c)?ss$/,
                use: ['style-loader', 'css-loader', POSTCSS]
            }
        ]
    }
}

const serverConfig = {
    entry: path.join(SRC_PATH, 'server/server.tsx'),
    target: 'node',
    resolve: { extensions: [".ts", ".tsx", ".js", ".jsx", ".json"] },
    output: { path: path.resolve(__dirname, './server'), filename: 'server.js' },
    module: {
        rules: [
            FILELOADER, TSLOADER,
            {
                test: /\.(s|c|l)(a|e|c)?ss$/,
                use: ['css-loader/locals', POSTCSS]
            }
        ],
    }
};

module.exports = [browserConfig, serverConfig];
