import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import store from './store';
import {Provider} from 'react-redux';


class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <div className="App">
              <p>用react-redux</p>
              <Header/>
              <List/>
            </div>
          </Provider>
        );
    }
}



export default App;
