import React, { Component } from 'react';
import store from './store';
import * as Types from './store/types';

class Counter1 extends Component {
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
        // console.log(s);
        this.setState({
          ...this.state,
          ...s
        });
      });
    }
    asyncAdd() {
      console.time('a');
      store.dispatch(dispatch => {
        setTimeout(() => {
          dispatch({type: Types.ADD});
          console.timeEnd('a');
        }, 1000);
      });
    }

    promiseAdd() {
      store.dispatch(new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({type: Types.ADD});
        }, 1000);
      }));
    }

    render() {
        return (
            <div>
              <p>Counter1: {this.state.count}</p>
              <p><button onClick={() => store.dispatch({type: Types.ADD})}>+</button></p>
              <p><button onClick={() => store.dispatch({type: Types.SUB})}>-</button></p>
              <p><button onClick={() => this.asyncAdd()}>setTimeout 1秒后+</button></p>
              <p><button onClick={() => this.promiseAdd()}>promise 1秒后+</button></p>
            </div>
        );
    }
}

export default Counter1;
