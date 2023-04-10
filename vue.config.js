const port = 8081
module.exports = ({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    proxy:{
      "/dev-api/":{
        target: "http://localhost:8888",
        pathRewrite: {
          //下面的key是一个正则表达式它的/api前加上^和不加^符号差别非常大
          "^/dev-api/": "",
        },
      }
    }
  }
})
