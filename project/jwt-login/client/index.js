import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch, Redirect} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import './index.css';
import Login from './pages/Login';
import User from './pages/User';
import Signup from './pages/Signup';
const history = createHashHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path='/' exact component={Signup}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/signup' exact component={Signup}></Route>
            <Route path='/user' component={User}></Route>
            <Redirect to='/' />
        </Switch>
    </Router>
, document.getElementById('app'));
