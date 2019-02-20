import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Types from './store/types';

const Li = (props) => {
    return props.list.map(i => <li key={i.id} 
        style={{
            textDecorationLine: i.done ? 'line-through' : '',
            cursor: 'pointer'
        }}
        onClick={() => props.handleDone(i.id, props.list)}>{i.text}</li>
    )
}

class List extends Component {
    render() {
        return (
        <div>
             <ul>
                <Li {...this.props}/>
             </ul>
        </div>
        )
    }
}


const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch, state) => ({
    handleDone(id, list) {
        dispatch({
          type: Types.DEL, 
          data: {id, list}
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);