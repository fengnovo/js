const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function MyPromise(fn) {
    var _this = this;
    _this.status = PENDING;
    _this.value;
    _this.fulfilledCallback = [];
    _this.rejectedCallback = [];
    function resolve(data) {
        _this.status = FULFILLED;
        _this.value = data;
        _this.fulfilledCallback.forEach(function(cb) {
            cb(data);
        });
    }
    function reject(reason) {
        _this.status = REJECTED;
        _this.value = reason;
        _this.rejectedCallback.forEach(function(cb) {
            cb(reason);
        });
    }

    /*
    function(resolve, reject) {
        setTimeout(function() {
            let s = Math.random();
            console.log(s);
            if (s > 0.5) {
                resolve('成功');
            } else {
                reject('失败');
            }
        }, 1000);
    }
    */
    fn(resolve, reject);
}

/*
p1.then(function (data) {
    console.log(data);
}, function (err) {
    console.log(err);
});
*/
// 存回调函数的
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    var _this = this;
    // 这是处理异步时
    if (_this.status === PENDING) {
        _this.fulfilledCallback.push(onFulfilled);
        _this.rejectedCallback.push(onRejected);
    }
    // 下面两个是处理同步时
    if (_this.status === FULFILLED) {
        onFulfilled(_this.value);
    }
    if (_this.status === REJECTED) {
        onRejected(_this.value);
    }

}


module.exports = MyPromise;

