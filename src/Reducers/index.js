import {combineReducers} from 'redux';
import users from './users'
import userCard from './userCard';
import request from './userCard';
import pools from './pools';

const rootReducer = combineReducers({
  pools,
  users,
  userCard,
  request
})

export default rootReducer
