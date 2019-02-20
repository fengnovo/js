import React, { Component } from 'react';

const Lis = (props) => {
    return props.list.map(i => <li key={i.id} 
        style={{
            textDecorationLine: i.done ? 'line-through' : '',
            cursor: 'pointer'
        }}
        onClick={() => props.handleDone(i.id)}>{i.text}</li>
    )
}

export default class List extends Component {
    render() {
        return (
        <div>
             <ul>
                <Lis {...this.props}/>
             </ul>
        </div>
        )
    }
}
