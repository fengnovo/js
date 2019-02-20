var count = 0;
function w1() {
    if(!postMessage) return;
    postMessage({
        msg:'这是data里的数据',
        count: count++
    });
    setTimeout(function (){
        w1();
    }, 500);
}
w1();