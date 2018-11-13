function Lock(key, brand) {
    this.key = key;
    this.brand = brand;
}
Lock.prototype.lock = function () {
    console.log('锁上');
}

var lock = new Lock('room1key', 'haoyongpai');
lock.lock();