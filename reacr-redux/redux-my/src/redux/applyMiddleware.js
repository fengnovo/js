// applyMiddleware(logger)(createStore)(count);
// createStore(count, applyMiddleware(logger1, logger2, logger3))
export default (...middlewares) => createStore => reducer => {
    let store = createStore(reducer);


    // logger = store => next => action
    let fristmiddleware = middlewares.pop();   
    // applyMiddleware(logger1, logger2, logger3)(createStore)(count)    这里先打印logger3
    

    // var s = [1,3,4,5]; s.reduce((pre, next)=>{return pre+next}, 0);    // 13  正常从左到右
    // 此时为[logger1, logger2]    上面是从左边开始取，下面也要从左边开始取
    let dispatch = middlewares.reduceRight((preDispatch, middleware) => {
        // console.log(middleware); // 先取到logger2再logger1
       return middleware(store)(preDispatch);
    }, fristmiddleware(store)(store.dispatch));
    
    return {
        ...store,
        ...{dispatch}
    }
}