import {combineReducers} from 'redux';
import userCard from './userCard';
import request from './userCard';
import pools from './pools';
import notifications from './notifications';
import requestForm from './request_form';
import requests from './request';
import authUser from './user';
import authAdmin from './admin';


const rootReducer = combineReducers({
  pools,
  userCard,
  requestForm,
  requests,
  request,
  notifications,
  authUser,
  authAdmin

})

export default rootReducer
