import React, { Component } from 'react';
import Counter1 from './Counter1';
import Counter2 from './Counter2';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Counter1 />
              <hr />
              <Counter2 />
            </div>
        );
    }
}

export default App;
