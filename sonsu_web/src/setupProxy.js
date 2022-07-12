const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/sonsuweb', {
      target: 'http://localhost:3000/',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/', {
      target: 'http://localhost:5000/',
      changeOrigin: true,
    }),
  );
};