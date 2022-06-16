'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
 // BASE_API: '"http://10.63.192.84:8080"',
 //  API_ROOT: ' "http://localhost:9528/api" '
  API_ROOT: '"http://localhost:9528/platform"'
})
