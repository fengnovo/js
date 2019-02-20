import React, { Component } from 'react';
import store from './store';
import * as Types from './store/types';

class Counter2 extends Component {
    constructor() {
      super();
      this.state = {
        count: store.getState()
      }
    }
    componentWillMount() {
      store.subscribe(() => {
        let s = {
          count2: store.getState()
        };
        // console.log(s);
        this.setState({
          ...this.state,
          ...s
        });
      });
    }
    asyncIncrement() {
      console.time('a');
      store.dispatch(dispatch => {
        setTimeout(() => {
          dispatch({type: Types.INCREMENT});
          console.timeEnd('a');
        }, 1000);
      });
    }

    promiseIncrement() {
      store.dispatch(new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({type: Types.INCREMENT});
        }, 1000);
      }));
    }

    render() {
        return (
            <div>
              <p>Counter2: {this.state.count2}</p>
              <p><button onClick={() => store.dispatch({type: Types.INCREMENT})}>+</button></p>
              <p><button onClick={() => store.dispatch({type: Types.DECREMENT})}>-</button></p>
              <p><button onClick={() => this.asyncIncrement()}>setTimeout 1秒后+</button></p>
              <p><button onClick={() => this.promiseIncrement()}>promise 1秒后+</button></p>
            </div>
        );
    }
}

export default Counter2;
