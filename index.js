var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

// proxy.on('proxyReq', function(proxyReq, req, res, options) {
//   proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
// });
const host = process.env.HOST || 'http://9557aea3.eu.ngrok.io';

var server = http.createServer(function(req, res) {
  proxy.web(req, res, {
    target: host,
    toProxy: false,
    changeOrigin: true,
  });
});

const port = process.env.PORT || 5050;
console.log(`listening on port ${port}`);
server.listen(port);
