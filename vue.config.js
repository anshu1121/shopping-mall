const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  devServer: {
    open: true, // 启动服务后自动打开浏览器
    host: '172.168.2.183', // 电脑ip地址，不同设备/网络启动时需要修改此ip
    port: '8080' // 端口号
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
})
