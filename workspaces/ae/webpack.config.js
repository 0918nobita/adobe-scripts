const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
};
