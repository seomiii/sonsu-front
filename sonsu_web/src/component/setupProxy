const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/model", {
      target: "http://localhost:5000"
    })
  );
};