import * as Types from '../consts/index';

const list = (state = { btnDisabled: false, list: [], text: '异步获取数据', page: 1}, action = {}) => {
    switch (action.type) {
        case Types.GET_LIST:
            state = { btnDisabled: state.btnDisabled, list: [...state.list, ...action.list], text: action.text, page: action.page};
            return state;
        case Types.CHANGE_BTN_STATE:
            state = Object.assign(state, { btnDisabled: false});
            return state;
        case Types.DISABLED_BTN_STATE:
            state = Object.assign(state, { btnDisabled: true});
            return state;
        default:
            return state;
    }
}


export default list;