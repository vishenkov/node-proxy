var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

// proxy.on('proxyReq', function(proxyReq, req, res, options) {
//   proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
// });

var server = http.createServer(function(req, res) {
  proxy.web(req, res, {
    target: 'http://63552fe6.eu.ngrok.io',
    toProxy: false,
    changeOrigin: true,
  });
});

console.log("listening on port 5050")
server.listen(process.env.port);
