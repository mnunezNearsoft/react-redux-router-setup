module.exports = {

    entry: './src/js/Main.js',
    output: {
        path: './dist/',
        filename: 'app.bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-es2015', 'react']
                }
            }
        ]
    }

};
