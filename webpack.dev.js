const merge = require('webpack-merge');
const path = require("path");
const common = require('./webpack.common');

module.exports = merge(common, {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    devtool: "cheap-eval-source-map"
})