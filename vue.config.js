module.exports = {
    devServer: {
        overlay: { // 遮罩层
          warnings: false,
          errors: false
        },
        // proxy:{ //代理
        //   "/api":{
        //     target:"http://m.maoyan.com",
        //     changeOrigin:true,
        //     pathRewrite:{
        //       "^/api":""
        //     },
        //   }
        // }
        open:true, //自动开启浏览器
        port:8000, //随便改端口号
        proxy:{ //代理
            "/info":{
              target:"http://47.107.34.238:3000",
              changeOrigin:true,
              pathRewrite:{
                "^/info":""
              },
            }
          }
    },
    lintOnSave:false, //直接关闭eslint检查
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          'con': '@/components',
          'views': '@/views',
        }
      }
    }
}