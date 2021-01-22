const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(createProxyMiddleware('/api',
  
  {
    ws: false,
    target: 'http://192.177.2.99/api/private/v1/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  },
  ))
}