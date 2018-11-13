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
console.log(room1 === room2); // false

// 上面是错的-----------------------------------------------------
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
console.log(room3 === room4);       // true