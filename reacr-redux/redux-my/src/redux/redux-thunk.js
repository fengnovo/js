// export default store => next => action => {
//     if(typeof action === 'function') return action(next);
//     return next(action);
// }

export default store => next => action => typeof action === 'function' ? action(next) : next(action);