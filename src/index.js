import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import createStore from './store';
import setAutherizationToken from './Containers/UserCardContainer/utils/setAuthrizationToken';
import { setCurrentUser } from './Actions/UserCard/index';
import jwt from 'jsonwebtoken'

const store = createStore();


if(localStorage.jwtToken){
    setAutherizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render(<Provider store = {store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
