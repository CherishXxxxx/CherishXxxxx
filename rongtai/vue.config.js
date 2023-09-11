module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  outputDir: "dist",
  // 以下是pwa配置
  pwa: {
    iconPaths: {
      favicon32     : 'favicon.ico',
      favicon16     : 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon      : 'favicon.ico',
      msTileImage   : 'favicon.ico'
    }
  },
  devServer: {
    port: 8066,
    https: false,
    hotOnly: false,
    open: true, // 配置自动启动浏览器
    proxy: {
      // 设置代理
      "/apis": {
        // target: "app.zjtouchnet.com:7040",
        target: "http://192.168.18.148:8887/",
        // target: "http://127.0.0.1:8083/",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          "^/apis": ""
        }
      }
    }
  },
  lintOnSave:false,
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias.set("vue$", "vue/dist/vue.common.js");
  },
  transpileDependencies: ["vue-echarts"],
};
