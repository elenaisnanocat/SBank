const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://j6d201.p.ssafy.io:9000',
      // 프론트엔드에서 벡엔드로 줄때 타겟을 설정하고 9000번으로 주겠다.
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/fastapi', {
      target: 'http://j6d201.p.ssafy.io:5555',
      // 프론트엔드에서 벡엔드로 줄때 타겟을 설정하고 5555번으로 주겠다.
      changeOrigin: true,
    }),
  );
};

