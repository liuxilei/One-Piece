const proxySettings = {
    // 接口代理1
    "/api/*": {
        target: "http://localhost:4399/public",
    },
    // 接口代理2
    // .....
  }

  module.exports = proxySettings