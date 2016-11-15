var path = require('path');

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx', '.json', 'index.json']
    },
    devtool: '#source-map',
    module: {
        loaders: [
        {
            loader: 'babel',
            exclude: /node_modules/
        },
        
        { test: /\.json$/, loader: "json-loader" }
        ]
    }
}
