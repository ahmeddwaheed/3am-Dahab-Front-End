import {ADMIN_SIGN_IN_SUCCESS, ADMIN_SIGN_IN_FAILURE, ADMIN_LOG_OUT,
    CURRENT_ADMIN_FAILURE, CURRENT_ADMIN_SUCCESS, } from '../Actions/Authentication';
import isEmpty from 'lodash';

const INTIAL_STATE = {
    isAdmin: !!localStorage.getItem('isAdmin'),
    admin: {},
    error: null
};

export default  (currentState = INTIAL_STATE, action) => {
   switch(action.type){
       case ADMIN_SIGN_IN_SUCCESS:
           return {...currentState, admin: action.admin, isAdmin: true}
       case ADMIN_SIGN_IN_FAILURE:
           return {...currentState, error:action.error,};
       case ADMIN_LOG_OUT:
           return {...currentState, admin:{}, isAdmin: true}
       case CURRENT_ADMIN_SUCCESS:
           return {...currentState, admin: action.admin}
       case CURRENT_ADMIN_FAILURE: 
           return {...currentState, error: action.error}
       default: return currentState;
   }
}