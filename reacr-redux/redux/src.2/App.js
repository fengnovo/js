import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import store from './store';
import * as Types from './store/types';

class App extends Component {
    constructor(args) {
        super(args);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDone = this.handleDone.bind(this);
        // store接管state
        this.state = store.getState();
        // 要订阅
        store.subscribe(()=> {
          console.log(store.getState());
          this.setState(store.getState());
        });
    }
    handleAdd(data) {
        if (!(data+'')) return;
        store.dispatch({
          type: Types.ADD, 
          data: {text: data, id: store.getState().idIndex}
        });

    }
    handleDone(id) {
        store.dispatch({
          type: Types.DEL, 
          data: {id, list: store.getState().list}
        });
    }
    render() {
        return (
            <div className="App">
              <p>只用redux，没有用react-redux</p>
              <Header handleAdd={this.handleAdd}/>
              <List list={this.state.list} handleDone={this.handleDone}/>
            </div>
        );
    }
}

export default App;
