function Lock(key) {
    this.key = key;
}
var getLock = function (key) {
    var lock;
    if (lock) {
        return lock;
    }
    lock = new Lock(key);
    return lock;
}
var room1 = getLock('room1');
var room2 = getLock('room2');
console.log(room1, room2, room1 === room2); // false

// 上面是错的-----------------------------------------------------
// 下面两种是对的单例模式-----------------------------------------------------
var roomLock = (function () {
    var lock;
    return {
        getLockInstance: function (key) {
            if (lock) {
                return lock;
            }
            lock = new Lock(key);
            return lock;
        }
    }
})();
var room3 = roomLock.getLockInstance('room3');
var room4 = roomLock.getLockInstance('room4');
console.log(room3, room4, room3 === room4);       // true

// 第二种-----------------------------------------------------

var room = {
    init: function () {
        this.lock = new Lock();
    },
    lock: undefined,
    getLockInstance: function () {
        var _this = this;
        if (_this.lock) {
            return _this.lock;
        }
        _this.init();
        return _this.lock;
    }
}
var room5 = room.getLockInstance();
var room6 = room.getLockInstance();
console.log(room5, room6, room5 === room6);       // true