(function(name, fn, scope) {
    if (module && module.exports) {
        module.exports = fn;
    } else if (define && define.cmd) {
        define(fn);
    } else {
        scope[name] = fn;
    }
})('JSTemplateEngine', function(){
    return function () {
        console.log(1111);
    }
}, this);
