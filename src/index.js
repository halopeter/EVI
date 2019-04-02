import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import * as serviceWorker from './serviceWorker';

import './index.css';
import Login from './components/Login';
//import Character from './components/Character';

ReactDOM.render(
    <CookiesProvider>
        <Login />
    </CookiesProvider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
