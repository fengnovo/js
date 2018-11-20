import { combineReducers } from 'redux';
import list from './list';
import content from './content';

export default combineReducers({
    list,
    content
});
