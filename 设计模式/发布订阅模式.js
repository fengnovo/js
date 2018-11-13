function WatchObserve() {
    this.events = {};    // 订阅的事件
}
WatchObserve.prototype.on = function (eventName, eventFn) {
    if (this.events[eventName]) {
        this.events[eventName].push(eventFn);
    } else {
        this.events[eventName] = [eventFn];
    }
}
WatchObserve.prototype.emit = function (eventName) {
    if (this.events[eventName]) {
        this.events[eventName].forEach(function(eventFn){
            eventFn.call(null);
        });
    }
}
var wo = new WatchObserve();
wo.on('eat', function () {
    console.log('吃早饭');
});
wo.on('eat', function () {
    console.log('吃午饭');
});
wo.on('eat', function () {
    console.log('吃晚饭');
});
wo.on('sleep', function () {
    console.log('睡午觉');
});
wo.on('sleep', function () {
    console.log('睡晚觉');
});
wo.emit('eat');
wo.emit('sleep');

