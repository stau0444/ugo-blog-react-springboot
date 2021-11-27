const { createProxyMiddleware } = require("http-proxy-middleware")


module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target:'http://3.37.32.130:9050/',
            changeOrigin:true,
        })
    )
}