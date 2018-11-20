import axios from 'axios';
import * as Types from '../consts/index';

export const viewDetail = ({ content, selected }) => {
    // console.log({
    //     type: Types.VIEW_DETAIL,
    //     playload: { content, selected }
    // });
    return {
        type: Types.VIEW_DETAIL,
        playload: { content, selected }
    };
};
export const getList = (data) => {
    return {
        type: Types.GET_LIST,
        data: data
    };
};

export const asycGetList = () => {
    //action可以是一个函数，有dispatch参数
    return (dispatch, getState) => {
        let page = getState().list.page;
        axios.get(`https://cnodejs.org/api/v1/topics?limit=10&page=${page}`).then(data => {
            dispatch({
                type: Types.CHANGE_BTN_STATE,
                btnDisabled: false
            });
            dispatch({
                type: Types.GET_LIST,
                list: data.data.data,
                page: page + 1,
                text: '下一页'
            });
        }).catch(e => {
            console.log(e);
        });
    };  
};

export const asycViewDetail = id => {
    return (dispatch, getState) => {
        axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(data => {
            dispatch(viewDetail({
                content: data.data.data,
                selected: id
            }));
        }).catch(e => {
            console.log(e);
        });
    }  ;
};

