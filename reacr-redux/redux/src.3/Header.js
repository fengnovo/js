import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Types from './store/types';

const Input = React.forwardRef((props, ref) => {
    return <input type="text" ref={ref}/>;
});

class Header extends Component {
    constructor(args) {
        super(args);
        this.inputRef = React.createRef();
    }

    render() {
        return (
        <div>
            <Input ref={this.inputRef}/>
            <button onClick={ () => {
                 this.props.handleAdd(this.inputRef.current.value, this.props.idIndex);
                 this.inputRef.current.value = '';
            }}>增加</button>
        </div>
        )
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => ({
    handleAdd(text, id) {
        if (!(text+'')) return;
        dispatch({
          type: Types.ADD, 
          data: {text, id}
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);