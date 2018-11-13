function LockFactory(key, brand) {
    var obj = {};
    obj.key = key;
    obj.brand = brand;
    obj.lock = function () {
        console.log('锁上');
    }
    return obj;
}

var lock = LockFactory('room1key', 'haoyongpai');
lock.lock();

// 衣服厂
var clothesFactory = {};
clothesFactory.clothes = '衣服';
clothesFactory.produce = function () {
    console.log('生产衣服');
}
var clothes = clothesFactory.clothes;
console.log(clothes);

// 抽象工厂
var Factory = function () {
};
Factory.prototype.produce = function () {
    throw new Error('抽象工厂不能生产东西');
}
var ShoesFactory = function () {
    Factory.call(this);
};
ShoesFactory.prototype = new Factory();
ShoesFactory.prototype.constructor = ShoesFactory;
ShoesFactory.prototype.produce = function () {
    console.log('生产鞋');
    return '鞋'
}
var shoes = (new ShoesFactory).produce();
console.log(shoes);

var shoes2 = (new Factory).produce(); // 抽象工厂不能生产东西