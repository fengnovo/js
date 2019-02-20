export default store => next => action => {
    if(typeof action.then === 'function') {
        return action.then(data => next(data));
    } else if(typeof action.then === 'function') {
        return action.then(data => next(data));
    } else {
        return next(action);
    }
}
