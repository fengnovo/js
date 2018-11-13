function Lock(key, brand) {
    if (!(this instanceof Lock)) {
        throw new Error('要使用new调用!!!');
    }
    this.key = key;
    this.brand = brand;
}
Lock.prototype.lock = function () {
    console.log('锁上');
}

var lock = new Lock('room1key', 'haoyongpai');
lock.lock();