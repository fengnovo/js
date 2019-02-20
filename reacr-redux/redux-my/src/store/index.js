import { createStore, applyMiddleware, combineReducers } from '../redux';
import reduxThunk from '../redux/redux-thunk';
import reduxPromise from '../redux/redux-promise';
import { count, count2 } from './reducers';
// const logger1 = store => next => action => {
//     console.log(`${action.type} 1前：`, store.getState());
//     next(action);
//     console.log(`${action.type} 1后：`, store.getState());
// }

// const logger2 = store => next => action => {
//     console.log(`${action.type} 2前：`, store.getState());
//     next(action);
//     console.log(`${action.type} 2后：`, store.getState());
// }

// const logger3 = store => next => action => {
//     console.log(`${action.type} 3前：`, store.getState());
//     next(action);
//     console.log(`${action.type} 3后：`, store.getState());
// }
let s = combineReducers({count, count2});
console.log(s);
export default applyMiddleware(reduxThunk, reduxPromise)(createStore)(s);
// export default applyMiddleware(reduxThunk, logger1, logger2, logger3)(createStore)(count);
// export default createStore(count, applyMiddleware(logger1, logger2, logger3));