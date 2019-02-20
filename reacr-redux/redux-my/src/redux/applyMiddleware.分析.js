// applyMiddleware(logger)(createStore)(count);
export default (...middlewares) => createStore => reducer => {
    let store = createStore(reducer);


    // logger = store => next => action
    let fristmiddleware = middlewares.pop();   
    // applyMiddleware(logger1, logger2, logger3)(createStore)(count)    这里先打印logger3
    

    let log3 =fristmiddleware(store)(store.dispatch);

    // var s = [1,3,4,5]; s.reduce((pre, next)=>{return pre+next}, 0);    // 13  正常从左到右
    // 此时为[logger1, logger2]    上面是从左边开始取，下面也要从左边开始取
    let dispatch = middlewares.reduceRight((preDispatch, middleware) => {
        // console.log(middleware); // 先取到logger2再logger1
       return middleware(store)(preDispatch);
    }, log3);
    console.log(log3);
    console.log(dispatch);
    /**
    ƒ (action) {
        console.log(1, store.getState());
        next(action);
    }
     */
    
    return {
        ...store,
        ...{dispatch}
    }
}


/**
 let a = {};
var merge = [{a:1},{b:2},{c:3}].reduceRight((pre, now) => {
       return Object.assign(pre, now);
    }, a);
// 这是a已经变了, merge也变了
// a  ------->  {c: 3, b: 2, a: 1}
// merge  ------->  {c: 3, b: 2, a: 1}
 */