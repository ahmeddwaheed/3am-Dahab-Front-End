import {combineReducers} from 'redux';
import userCard from './userCard';
import request from './userCard';
import pools from './pools';
import auth from './auth';

const rootReducer = combineReducers({
  pools,
  userCard,
  request,
  auth
})

export default rootReducer
