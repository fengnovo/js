const http = require('http');
const url = require('url');

module.exports = function () {
    let app = (req, res) => {
        let reqMethod = req.method.toLowerCase();
        let { pathname } = url.parse(req.url, true);

        let index = 0;
        let next = () => {
            if (index === app.routes.length) {
                return res.end(`Can't ${reqMethod} ${pathname}`);
            }
            let { method, path, handler } = app.routes[index++];
            if ('middleWare' === method) {
                if (path === '/' || path === pathname || pathname.startsWith(path+'/')) {
                    // 将遍历是否可以持续下去的权利交给绑定的函数，绑定函数如果有调用next()，就继续如果没有就中断
                    handler(req, res, next);
                } else {
                    next();
                }
            } else {
                if ((reqMethod === method || 'all' === method)
                    && (pathname === path || '*' === path)) {
                    handler(req, res);
                } 
                next();
            }
        }
        next(); // 让遍历可以持续下去
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
    app.use = (path, handler) => {
        if (typeof handler !== 'function') {
            handler = path;
            path = '/';
        }
        app.routes.push({
            method: 'middleWare',
            path,
            handler
        });
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