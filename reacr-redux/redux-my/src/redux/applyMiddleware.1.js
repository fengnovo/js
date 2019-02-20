// applyMiddleWare(logger)(createStore)(count);
export default middleware => createStore => reducer => {
    let store = createStore(reducer);
    // logger = store => next => action
    let dispatch = middleware(store)(store.dispatch);
    return {
        ...store,
        ...{dispatch}
    }
}