import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import history from './history'
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import createStore from './store';
import setAutherizationToken from './Containers/UserCardContainer/utils/setAuthrizationToken';
import { setCurrentUser , setCurrentUserSuccess, setCurrentUserFailure} from './Actions/Authentication';
import jwt from 'jsonwebtoken'

const store = createStore();


if(localStorage.jwtToken){
    setAutherizationToken(localStorage.jwtToken);
    // store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
    store.dispatch(setCurrentUser()).then(response => {
        if(response.payload.status < 400){
            store.dispatch(setCurrentUserSuccess(response.payload.data))
        }
        else {
            store.dispatch(setCurrentUserFailure(response.payload.error))
        }
    })
}

ReactDOM.render(<Provider store = {store}><Router history={history}><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
