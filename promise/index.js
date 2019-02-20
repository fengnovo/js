var MyPromise = require('./MyPromise.js');

var p1 = new MyPromise(function(resolve, reject) {
    setTimeout(function() {
        var s = Math.random();
        console.log(s);
        if (s > 0.5) {
            resolve('成功');
        } else {
            reject('失败');
        }
    }, 1000);
});

p1.then(function (data) {
    console.log(data);
}, function (err) {
    console.log(err);
});
