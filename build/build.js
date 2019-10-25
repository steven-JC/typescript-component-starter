require('colors')
const webpack = require('webpack')
const config = require('./webpack.config')

process.env.NODE_ENV = 'production'

console.log(`正在构建项目`)
webpack(config, function(err, stats) {
    if (!err) {
        console.log(`成功构建 core`.green)
    } else {
        throw err
    }
})
