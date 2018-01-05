import {USER_SIGN_IN_SUCCESS, USER_SIGN_IN_LOADING, USER_SIGN_IN_FAILURE, USER_LOG_OUT,
     SET_CURRENT_USER_FAILURE, SET_CURRENT_USER_SUCCESS, } from '../Actions/Authentication';
import isEmpty from 'lodash';

const INTIAL_STATE = {
    isAuthenticated: localStorage.jwtToken ? true: false,
    user: {},
    error: null
};

export default  (currentState = INTIAL_STATE, action) => {
    switch(action.type){
        case USER_SIGN_IN_LOADING:
            return {...currentState, loading: true};
        case USER_SIGN_IN_SUCCESS:
            return {...currentState, user: action.user, isAuthenticated: true};
        case USER_SIGN_IN_FAILURE:
            return {...currentState, error:action.error};
        case USER_LOG_OUT:
            return {...currentState, isAuthenticated: false, user:{}}
        case SET_CURRENT_USER_SUCCESS:
            return {...currentState, user: action.user, isAuthenticated: true};
        case SET_CURRENT_USER_FAILURE: 
            return {...currentState, error: action.error}
        default: return currentState;
    }
}