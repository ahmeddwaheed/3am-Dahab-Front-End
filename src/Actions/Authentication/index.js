import axios from 'axios';
import {userSignInAPi, currentUserApi, adminLoginApi, currentAdminApi} from '../../api';

export const USER_SIGN_IN = 'USER_SIGN_IN';
export const USER_SIGN_IN_LOADING = 'USER_SIGN_IN_LOADING';
export const USER_SIGN_IN_SUCCESS = 'USER_SIGN_IN_SUCCESS';
export const USER_SIGN_IN_FAILURE = 'USER_SIGN_IN_FAILURE';

export const USER_LOG_OUT = 'USER_LOG_OUT';
export const SET_CURRENT_USER = 'SET_CURRENT_USER ';
export const SET_CURRENT_USER_SUCCESS = 'SET_CURRENT_USER_SUCCESS';
export const SET_CURRENT_USER_FAILURE = 'SET_CURRENT_USER_FAILURE';

export const ADMIN_SIGN_IN = 'ADMIN_SIGN_IN';
export const ADMIN_SIGN_IN_SUCCESS = 'ADMIN_SIGN_IN_SUCCESS';
export const ADMIN_SIGN_IN_FAILURE = 'ADMIN_SIGN_IN_FAILURE';

export const ADMIN_LOG_OUT = 'ADMIN_LOG_OUT';
export const CURRENT_ADMIN = 'CURRENT_ADMIN ';
export const CURRENT_ADMIN_SUCCESS = 'CURRENT_ADMIN_SUCCESS';
export const CURRENT_ADMIN_FAILURE = 'CURRENT_ADMIN_FAILURE';

export const userSignIn = (user) => {
    const payload = axios.post(userSignInAPi, user);
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

export const userLogout = () => {
    return {
        type: USER_LOG_OUT
    }
}
export const setCurrentUser = () => {
    const payload = axios.get(currentUserApi)
    return {
        type: SET_CURRENT_USER,
        payload
    }
}
export const setCurrentUserSuccess = (user) => {
    return {
        type: SET_CURRENT_USER_SUCCESS,
        user
    }
}
export const setCurrentUserFailure = (error) => {
    return {
        type: SET_CURRENT_USER_FAILURE,
        error
    }
}
export const adminSignIn = (admin) => {
    const payload = axios.post(adminLoginApi, admin);
    return {
        type: ADMIN_SIGN_IN,
        payload
    }
}
export const adminSignInSuccess = (admin) => {
    return {
        type: ADMIN_SIGN_IN_SUCCESS,
        admin
    }
}
export const AdminSignInFailure = (error) => {
    return {
        type: ADMIN_SIGN_IN_FAILURE,
        error
    }
}
export const setCurrentAdmin = () => {
    const payload = axios.get(currentAdminApi)
    return {
        type: CURRENT_ADMIN,
        payload
    }
}
export const setCurrentAdminSuccess = (admin) => {
    return {
        type: CURRENT_ADMIN_SUCCESS,
        admin
    }
}
export const setCurrentAdminFailure = (error) => {
    return {
        type: CURRENT_ADMIN_FAILURE,
        error
    }
}