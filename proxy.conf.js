module.exports = {
  "/api": {
    "target": "http://localhost:6300/",
    "changeOrigin": true,
    "logLevel": "debug",
    "pathRewrite": {"^/api" : "/admin"}
  }
}