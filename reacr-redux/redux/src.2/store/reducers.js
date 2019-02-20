import * as Types from './types';

export const list = (state = [], action) => {
    if(action) { 
        switch (action.type) {
            case Types.ADD:
                let {text,id} = action.data;
                let s = state.concat({
                    id,
                    text,
                    done: false
                });
                return s;
            case Types.DEL:
                return action.data.list.map(i => {
                    if(i.id === action.data.id) {
                        return {
                            ...i,
                            done: !i.done
                        }
                    } else {
                        return i
                    }
                });
            default:
                return state;
        }
    }
}

export const idIndex = (state = 0, action) => {
    switch (action.type) {
        case Types.ADD:
            return ++state;
        case Types.DEL:
            return state;
        default:
            return state;
    }
}