module.exports = {
  "/api/*": {
    "target": "https://apying.com",
    "changeOrigin": true,
    "logLevel": "debug",
    "pathRewrite": {"^/api" : "/admin"}
    }
}