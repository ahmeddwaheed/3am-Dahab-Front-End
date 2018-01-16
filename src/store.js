import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './Reducers';
import { loadingBarMiddleware } from 'react-redux-loading-bar'

import promise from 'redux-promise';

const middlewares = applyMiddleware(promise, loadingBarMiddleware({scope: 'sectionBar'}));
const composer = compose(middlewares);

export default function(){
  return createStore(rootReducer,  composer);
}
