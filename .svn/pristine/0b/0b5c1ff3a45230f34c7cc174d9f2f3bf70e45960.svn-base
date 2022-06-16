'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

/*node模拟服务 start*/
const express = require('express')
const app = express()

const users = require('../mock/users.json') // 用户列表数据源
const permission = require('../mock/permission.json') // 用户列表数据源
const routes = express.Router()
// app.use('/platform', routes)
/*node模拟服务 end*/

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {

    /*node模拟服务 start*/
    // before(app){
    //   app.post('/gcd/gcdlogin', (req, res) => {
    //     console.log("webpack",res)
    //     res.setHeader('X-Foo', 'bar');
    //     res.setStatus('500');
    //     res.json({
    //       errno:0,
    //       data:users
    //     })
    //   })
    // },
    before(app){
      // app.post('/platform/login', (req, res) => {
      //   res.setHeader('jwt', 'eyJhdXRoIjp7ImNvbUNvZGUiOiIwMDAwMDAwMCIsImdjZGxvZ0tleSI6ImFkbWluJjAiLCJtZW51IjpbImhtZGRvd25sb2FkIiwiaG1kdXBsb2FkIl0sInBvd2VyU3RyIjpbIjAwMDAwMDAwJSJdLCJ1c2VyQ29kZSI6ImFkbWluIn0sImNvbWNvZGUiOiIwMDAwMDAwMCIsImV4cGlyYXRpb24iOiIxNTcyODMzMDIxODMyIiwia2V5IjoiNDJkMzZjOGNiNjJhYjY0NmRmNmM5NWM1N2M4Mzg2YmM1YWViOTg2Y2RiMzQ4ODM4ODVmNTllNTFiYjhhODZlM2RlZDBjYjVkZjZkNDNiMDM1MDU4OWYwMmNhZTlkZWY5MDQ3ZTI0NzRjZjE4MWYwOTM1YTdjZDRhNjVhNjE0M2ZiYTk0ZGQ2YmVhYzA3ZDg1Y2Y0ODhlZmQ2NzFkZDAxY2NjMDg1ODg1NDdkNGU4ZGQyODQ2OTQzOTgyNGM4MmI2MjMyMDcwMDc2ZThkNzc2YWUzZjg3NWU5M2FmYzNkN2E4NjZhNmM3NzFkZTNhZTU4NzVkMWRiMzM5M2EzMDQxNGM1MjM0M2FmYjJjZDc1OGIzMzYwMDQ1YzFhMWMwMmFlZDdkNzQ4ODgyYjg1MDJhMGU1OGNiODk0YWM2OTI2ZjE0MmQ3MDBiODJlMGIxNjIwOTE5NDE3ZTA1M2FlOTUwOTAyZTNkY2QzZTkxOWZiNGRlNjliNTAzNjllNzRiMDk2Njc2ZGI0OWNiZmNlODA2NzI2NThiNmU3YWZjNjNkOTA1Yjc2NmQwOGQ0ZDVhOWRmY2RjMmI0YjJmMDk0ZWJkMzRkMDM5MzA2MTE0OWE0OTFkMTcwMjIzZjIzNGZjOTA2YWRmMDM2NTIzNGM4ZjVjMDVmMTk3OWY1YTYzZDg1YWEiLCJyZWZyZXNoVGltZSI6IjE1NzI4MzE4MjE4MzIiLCJ0b2tlbiI6IjNjNjhhY2NmZDc0MWY4MDk1ZGNkNTg2Yzc4ZTQxMTZhODI4ZTA4NTczYzA1Mzc5ODA1YWJkNWQ4ODJhYTkyMzc4MGUwNjU2YjZlY2NhYmRlZDZmZGM2NDkyNjMwNzg0MWEyZjA4NjE3Yzg0MWYxZGNmOTc0ZmI0ZTQ4ZjBjMGQzJjY1IiwidXNlcmNvZGUiOiJhZG1pbiJ9');
      //   res.json(users)
      // })
     /* app.post('/platform/menuPower', (req, res) => {
        res.json(permission[req.query.menuName])
      })*/
    },
    /*node模拟服务 end*/
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    // hotOnly: false,
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // },
    // contentBase: resolve(__dirname, '../dist'),
    // host: '0.0.0.0',
    //disableHostCheck: true, //  新增该配置项
    // port: 4000,


    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      favicon: resolve('log.ico'),
      title: 'nx-admin'
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
