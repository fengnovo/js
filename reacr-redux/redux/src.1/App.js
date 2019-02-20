import React, { Component } from 'react';
import Header from './Header';
import List from './List';

class App extends Component {
    constructor(args) {
        super(args);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.state = {
          list: [],
          idIndex: 0
        }
    }
    handleAdd(data) {
        if (!(data+'')) return;
        let {list,idIndex} = this.state;
        this.setState({
          list: list.concat({
              id: idIndex,
              text: data,
              done: false
            }),
          idIndex: ++idIndex  // 要先加一
        });
    }
    handleDone(id) {
        let {list} = this.state;
            this.setState({
                list: list.map(i => {
                  if(i.id === id) {
                    return {
                      ...i,
                      done: !i.done
                    }
                  } else {
                    return i
                  }
                })
            });
    }
    render() {
        return (
            <div className="App">
              <p>没有用redux</p>
              <Header handleAdd={this.handleAdd}/>
              <List list={this.state.list} handleDone={this.handleDone}/>
            </div>
        );
    }
}

export default App;
