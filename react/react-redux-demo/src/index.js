import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './assets/css/index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import store from './store/index';





ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change  如果您希望应用程序脱机并加载更快，您可以更改
// unregister() to register() below. Note this comes with some pitfalls.        unReistSube（）到下面的RealStices（）。注意，这有一些陷阱。
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
