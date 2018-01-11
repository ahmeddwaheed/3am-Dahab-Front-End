import {USER_SIGN_IN_SUCCESS, USER_SIGN_IN_LOADING, USER_SIGN_IN_FAILURE, USER_LOG_OUT,
     SET_CURRENT_USER_FAILURE, SET_CURRENT_USER_SUCCESS, } from '../Actions/Authentication';
import isEmpty from 'lodash';
import { EDIT_USER_SUCCESS, EDIT_USER_FAILURE } from '../Actions/UserCard/index';

const INTIAL_STATE = {
    isUser: !!localStorage.getItem('isUser'),
    user: {},
    error: null
};

export default  (currentState = INTIAL_STATE, action) => {
    switch(action.type){
        case USER_SIGN_IN_LOADING:
            return {...currentState, loading: true};
        case USER_SIGN_IN_SUCCESS:
            return {...currentState, user: action.user, isUser: true};
        case USER_SIGN_IN_FAILURE:
            return {...currentState, error:action.error};
        case USER_LOG_OUT:
            return {...currentState, user:{}, isUser: false};
        case SET_CURRENT_USER_SUCCESS:
            return {...currentState, user: action.user};
        case SET_CURRENT_USER_FAILURE:
            return {...currentState, error: action.error};
        case EDIT_USER_SUCCESS:
            return {...currentState, user:action.user, isUser: true};
        case EDIT_USER_FAILURE:
            return {...currentState, error: action.error};
        default: return currentState;
    }
}