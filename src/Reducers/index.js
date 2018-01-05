import {combineReducers} from 'redux';
import userCard from './userCard';
import request from './userCard';
import pools from './pools';
import requestForm from './request_form';
import requests from './request';
import auth from './auth';

const rootReducer = combineReducers({
  pools,
  userCard,
  requestForm,
  requests,
  request,
  auth,
})

export default rootReducer
