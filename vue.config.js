let path = require('path');
const url = process.env.VUE_APP_URL // 代理地址
const clientUrl = process.env.VUE_APP_CLIENTURL;

module.exports= {
    // publicPath:"/",
    publicPath:process.env.NODE_ENV == 'development' ?"/":"/web/",
    outputDir:"dist",
    assetsDir:"assets",
    indexPath:"index.html",
    filenameHashing:true,
    pages:{
        index:{
            entry:"./src/pages/pc/index.js",
            template:"./src/pages/pc/index.html",
            fileName:"index.html",
            title:"首页",
            chunks:['chunk-vendors','chunk-common','index']
        },
        mobile:{
            entry:"./src/pages/mobile/mobile.js",
            template:"./src/pages/index/mobile.html",
            fileName:"mobile.html",
            title:"白菜",
            chunks:['chunk-vendors','chunk-common','mobile']
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@", path.join(__dirname, "./src"))
    },
    devServer: {
        disableHostCheck: true,
        port: 8080,
        proxy: {
          '/api': {
            pathRewrite: {
              '^/api': '/'
            },
            target: 'http://192.168.33.176:9999',
            ws: false, // 需要websocket 开启
            changeOrigin: true,
          
          },
           '/test': {
            pathRewrite: {
              '^/test': '/'
            },
            target: 'http://192.168.34.216:8090',
            ws: false, // 需要websocket 开启
            changeOrigin: true,
           
          },

          '/bi': {
            target: url,
            ws: false, // 需要websocket 开启
            changeOrigin: true
          },
          '/client': {
            target: clientUrl,
            ws: false, // 需要websocket 开启
            changeOrigin: true
          },
       
         
    
          // 3.5 以后不需要再配置
        }
    },
    css: {
        loaderOptions: {
          // postcss: {
          //   plugins: [
          //     require('postcss-px2rem')({
          //       remUnit: 75, //代表 1rem = 75px，所以当你的值为75px时，它会自动转成 (75/75)rem，也就是1rem;
          //       remPrecision: 2, // 代表 remUnit 的 2 倍，一般可以不写
          //     })
          //   ]
          // }
        }
    }
}