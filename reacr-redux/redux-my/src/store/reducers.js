import * as Types from './types';

export const count = (state = 0, action) => {
    switch (action.type) {
        case Types.ADD:
            return state + 1;
        case Types.SUB:
            return state - 1;
        default:
            return state;
    }
}

export const count2 = (state = 0, action) => {
    switch (action.type) {
        case Types.INCREMENT:
            return state + 1;
        case Types.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

// export default combineReducers({});