const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const webpack = require('webpack')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,// 关闭Eslint语法检查
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                // "daterangepicker":"@/assets/daterangepicker/daterangepicker.js"
            },
        },
    },
    // externals:{
    //     "daterangepicker":"@/assets/daterangepicker/daterangepicker.js"
    // },
    plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "windows:jQuery": "jquery"
        })
      ]

})