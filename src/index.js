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

const store = createStore();


if(localStorage.jwtToken){
    setAutherizationToken(localStorage.jwtToken);
}

ReactDOM.render(<Provider store = {store}><Router history={history}><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
