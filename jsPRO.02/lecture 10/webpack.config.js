module.exports = {
    // watch: true,
    entry: "./js/src/app.js",
    output: {
        path: __dirname + '/js/bundle',
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};