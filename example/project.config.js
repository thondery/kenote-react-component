
const path = require('path')
const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  env          : NODE_ENV,
  __PROD__     : NODE_ENV === 'production',
  __DEV__      : NODE_ENV === 'development',
  globals      : {
    __DEASKTOP__ : false
  },
  basePath     : __dirname,
  srcDir       : 'src',
  outDir       : 'dist',
  publicPath   : '',
  sourcemaps   : true,
  manifest     : 'dll/manifest.json',
  vendors      : [
    'babel-polyfill',
    'react',
    'react-dom',
    'react-hot-loader'
  ],
  alias        : {
    containers                : path.resolve(__dirname, 'src/containers'),
    'kenote-layout'           : path.resolve(__dirname, '../src')
  }
}