import React, { Component } from 'react';
import store from './store';
import * as Types from './store/types';

class App extends Component {
    constructor() {
      super();
      this.state = {
        count: store.getState()
      }
    }
    componentWillMount() {
      store.subscribe(() => {
        let s = {
          count: store.getState()
        };
        console.log(s);
        this.setState({
          ...this.state,
          ...s
        });
      });
    }
    render() {
        return (
            <div className="App">
              <p>{this.state.count}</p>
              <p><button onClick={() => store.dispatch({type: Types.ADD})}>+</button></p>
              <p><button onClick={() => store.dispatch({type: Types.SUB})}>-</button></p>
            </div>
        );
    }
}

export default App;
