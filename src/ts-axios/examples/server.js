const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config') // 从 webpack.config.js 文件中读取 Webpack 配置


const app = express()

// 用读取到的 Webpack 配置实例化一个 Compiler
const compiler = webpack(WebpackConfig)

// 给 app 注册 webpackMiddleware 中间件
/*
  webpackDevMiddleware 函数返回结果是一个Express中间件，具有以下功能：
  * 接收来自 Webpack Compiler 实例输出的文件，但不会把文件输出到硬盘，而是保存在内存中
  * 往 Expressjs app 上注册路由，拦截 HTTP 收到的请求，根据请求路径响应对应的文件内容
  通过 webpack-dev-middleware 能够将 DevServer 集成到你现有的 HTTP 服务器中，
  让你现有的 HTTP 服务器能返回 Webpack 构建出的内容，而不是在开发时启动多个 HTTP 服务器。
  这特别适用于后端接口服务采用 Node.js 编写的项目。
*/

app.use(
  webpackDevMiddleware(compiler, {
    // 只有 publicPath 属性为必填，其它都是选填项
    // Webpack 输出资源绑定在 HTTP 服务器上的根目录，
    // 和 Webpack 配置中的 publicPath 含义一致
    publicPath: '/__build__/',
    // 统计信息输出样式
    stats: {
      colors: true,
      chunks: false
    }
  })
)


/*
  DevServer 提供了一个方便的功能，可以做到在监听到文件发生变化时自动替换网页中的老模块，以做到实时预览。
  DevServer 虽然是基于 webpack-dev-middleware 实现的，
  但 webpack-dev-middleware 并没有实现模块热替换功能，而是 DevServer 自己实现了该功能。

  为了在使用 webpack-dev-middleware 时也能使用模块热替换功能去提升开发效率，
  需要额外的再接入 webpack-hot-middleware。 需要做以下修改才能实现模块热替换。

*/
app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Router 路由设置
const router = express.Router()
router.get('/simple/get', (req, res) => {
  res.json({
    msg: 'hello simple'
  })
})
router.get('/base/get', function(req, res) {
  res.json(req.query)
})
app.use(router)

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
