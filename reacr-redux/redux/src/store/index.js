import { createStore } from 'redux';
import { count } from './reducers';
export default createStore(count);