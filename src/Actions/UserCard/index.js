import axios from 'axios';

export const GET_USER_LOADING = 'GET_USER_LOADING';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';


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