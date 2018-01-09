import axios from 'axios';

export const GET_USER_LOADING = 'GET_USER_LOADING';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const GET_REQUEST = 'GET_REQUEST';
export const GET_REQUEST_SUCCESS = 'GET_REQUEST_SUCCESS';
export const GET_REQUEST_FAILURE = 'GET_REQUEST_FAILURE';

export const ADD_USER = 'ADD_USER';
export const ADD_USER_LOADING = 'ADD_USER_LOADING';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';




export const getRequest = (pool_id) => {
    const payload = axios.get(`http://localhost:3001/requests/find_pool?pool_id=${pool_id}`);
    return {
        type: GET_REQUEST,
        payload
    }
}
export const getRequestSuccess = (request) => {
    return {
        type: GET_REQUEST_SUCCESS,
        request
    }
}
export const getRequestFailure = (error) => {
    return {
        type: GET_REQUEST_FAILURE,
        error
    }
}

export const getUserLoading = () => {
    return {
        type: GET_USER_LOADING
    }
}
export const getUser = (id) => {
    const payload = axios.get(`http://localhost:3001/users/${id}`);
    return {
        type: GET_USER,
        payload

    }
}
export const getUserSuccess = (user) => {
    return {
        type: GET_USER_SUCCESS,
        user
    }
}
export const getUserFailure = (error) => {
    return {
        type: GET_USER_FAILURE,
        error
    }
}

export const addUser = (user) => {
    const payload = axios.post(`http://localhost:3001/users/register`, user);
    return {
        type: ADD_USER,
        payload
    }
}
export const addUserLoading = () => {
    return {
        type: ADD_USER_LOADING,
    }
}
export const addUserSuccess = (user) => {
    return {
        type: ADD_USER_SUCCESS,
        user
    }
}
export const addUserFailure = (error) => {
    return {
        type: ADD_USER_FAILURE,
        error
    }
}
