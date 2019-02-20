import React, { Component } from 'react';

const Input = React.forwardRef((props, ref) => {
    return <input type="text" ref={ref}/>;
});

export default class Header extends Component {
    constructor(args) {
        super(args);
        this.inputRef = React.createRef();
    }

    render() {
        return (
        <div>
            <Input ref={this.inputRef}/>
            <button onClick={ () => {
                 this.props.handleAdd(this.inputRef.current.value);
                 this.inputRef.current.value = '';
            }}>增加</button>
        </div>
        )
    }
}
