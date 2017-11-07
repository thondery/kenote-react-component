
const path = require('path')
const webpack = require('webpack')
const project = require('./project.config')


const config = {
  entry: {
    vendor: project.vendors,
  },
  output: {
    path: path.join(__dirname, project.outDir),
    filename: '[name]_bundle.js',
    library: '[name]_bundle'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, project.manifest),
      name: '[name]_bundle',
      context: __dirname,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        collapse_vars: true,
        reduce_vars: true,
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory=true'
      },
    ]
  }
}

module.exports = config