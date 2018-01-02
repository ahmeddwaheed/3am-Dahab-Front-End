import {combineReducers} from 'redux';
import users from './users'
import userCard from './userCard';
import pools from './pools';
import requestForm from './request_form';
import requests from './request';

const rootReducer = combineReducers({
  pools,
  users,
  userCard,
  requestForm,
  requests
})

export default rootReducer
