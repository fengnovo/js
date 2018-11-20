import * as Types from '../consts/index';

export default (state = {content: '请点击"异步获取数据"', selected: 0}, action = {}) => {
    switch (action.type) {
        case Types.VIEW_DETAIL:
            state = {
                content: action.playload.content,
                selected: action.playload.selected
            };
            return state;
        default:
            return state;
    }
};
