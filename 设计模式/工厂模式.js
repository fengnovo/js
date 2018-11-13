function LockFactory(key, brand) {
    var obj = {};
    obj.key = key;
    obj.brand = brand;
    obj.lock = function () {
        console.log('锁上');
    }
    return obj;
}

var lock = new LockFactory('room1key', 'haoyongpai');
lock.lock();