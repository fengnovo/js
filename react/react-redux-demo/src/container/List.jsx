import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asycGetList, asycViewDetail } from '../store/actions/index';
import * as Types from '../store/consts/index';

class List extends Component {
    render() {
        return (
            <div>
                { this.props.page > 1 ? <p>{ this.props.page }</p> : null }
                <ul>
                    { 
                        this.props.list.map((item, index) => {
                            console.log(item.id === this.props.selected);
                            return item.id === this.props.selected ? <li className='selected' onClick={this.props.viewDetail.bind(this, item.id)} key={item.id}>{ item.title } </li>
                                    : <li onClick={this.props.viewDetail.bind(this, item.id)} key={item.id}>{ item.title } </li>
                            }
                        )
                    }
                </ul>
                <button onClick={this.props.onclick} disabled={this.props.btnDisabled}> {this.props.text} </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list.list,
        btnDisabled: state.list.btnDisabled,
        text: state.list.text,
        page: state.list.page,
        selected: state.content.content.selected
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onclick: () => {
            dispatch({
                type: Types.DISABLED_BTN_STATE
            });
            dispatch(asycGetList());
        },
        viewDetail: id => {
            dispatch(asycViewDetail(id));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(List);