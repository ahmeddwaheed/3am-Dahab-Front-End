import axios from 'axios';


export const USER_SIGN_IN = 'USER_SIGN_IN';
export const USER_SIGN_IN_LOADING = 'USER_SIGN_IN_LOADING';
export const USER_SIGN_IN_SUCCESS = 'USER_SIGN_IN_SUCCESS';
export const USER_SIGN_IN_FAILURE = 'USER_SIGN_IN_FAILURE';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const USER_LOG_OUT = 'USER_LOG_OUT';




export const userSignIn = (user) => {
    const payload = axios.post(`http://localhost:3001/users/login`, user);
    return {
        type: USER_SIGN_IN,
        payload
    }
}
export const userSignInLoading = () => {
    return {
        type: USER_SIGN_IN_LOADING
    }
}
export const userSignInSuccess = (user) => {
    return {
        type: USER_SIGN_IN_SUCCESS,
        user
    }
}
export const userSignInFailure = (error) => {
    return {
        type: USER_SIGN_IN_FAILURE,
        error
    }
}

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export const userLogout = () => {
    return {
        type: USER_LOG_OUT
    }
}