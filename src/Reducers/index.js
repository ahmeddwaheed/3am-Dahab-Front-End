import {combineReducers} from 'redux';
import userCard from './userCard';
import request from './userCard';
import pools from './pools';
import requestForm from './request_form';
import requests from './request';
import auth from './user';
import admin from './admin';


const rootReducer = combineReducers({
  pools,
  userCard,
  requestForm,
  requests,
  request,
  auth,
  admin
})

export default rootReducer
