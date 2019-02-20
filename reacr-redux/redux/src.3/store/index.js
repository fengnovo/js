import { createStore, combineReducers } from 'redux';
import { list,idIndex } from './reducers';
export default createStore(combineReducers({list,idIndex}));