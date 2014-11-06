# Node Dev Proxy

Node development proxy module.

Based on [this article](http://www.catonmat.net/http-proxy-in-nodejs/),
it allows development server to act as a proxy towards any other data
server, mostly used in single page applications development with an
external data source.

It allows complete control over the creation of the proxy HTTP request,
allowing passing in hostname, host (IP address), port, path, method
and headers.

Between hostname and host, the module currently uses only host IP address
if available, ommitting setting the hostname on the request options because
of the slow resolving of DNS lookups in Node core
(see [discussion](https://github.com/nodejitsu/node-http-proxy/issues/314)).

Hostname for the request should be set in request headers so that the target
server can distinguish the hostname the request is targeted for.


## Usage:

    var proxy = require('node-dev-proxy');
    proxy.proxy(req, res, hostname, host, port, path, method, headers);


## History

  * **0.1.0** - [2013-02-24] Initial release

## License

This library is licensed under the **MIT License**
