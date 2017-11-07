
const path = require('path')
const webpack = require('webpack')
const project = require('./project.config')
const webpackConfig = require('./webpack.config')

webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)

module.exports = Object.assign(webpackConfig, {
  devServer: {
    contentBase: path.join(__dirname, project.outDir),
    compress: false,
    hot: true,
    port: 3000,
    historyApiFallback: true,
    publicPath: project.publicPath
  }
})