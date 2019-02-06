const http = require('http');
const url = require('url');

module.exports = function () {
    let app = (req, res) => {
        let reqMethod = req.method.toLowerCase();
        let { pathname } = url.parse(req.url, true);
        app.routes.forEach(route => {
            let { method, path, handler } = route;
            if ((reqMethod === method || 'all' === method)
                && (pathname === path || '*' === path)) {
                console.log(handler);
                handler(req, res);
            }
        });
    }
    app.routes = [];
    http.METHODS.forEach((method) => {
        method = method.toLowerCase();
        app[method] = (path, handler) => {
            app.routes.push({
                method,
                path,
                handler
            });
        }
    });
    app.use = (params) => {
        
    }
    app.all = (path, handler) => {
        app.routes.push({
            method: 'all',
            path,
            handler
        });
    }
    app.listen = (...args) => {
        let server = http.createServer(app);
        server.listen(...args);
    }
    return app;
}