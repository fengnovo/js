import React, {
  Component
} from 'react';
import { connect } from 'react-redux';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Switch
// } from 'react-router-dom';

import '../assets/css/App.css';
import List from './List.jsx';
import Content from './Content.jsx';

class App extends Component {
    render() {
        return ( <div className = "App" >
            <nav className="left">
                <List list={this.props.list} />
            </nav>
            <div className="right">
                <Content />
            </div>
        </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        content: state.content,
        list: state.list
    };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {

//     }
// };

export default connect(mapStateToProps)(App);