import axios from 'axios';


export const GET_USERS_LOADING = 'GET_USERS_LOADING';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';


export const getUsersLoading = () => {
    return {
        type: GET_USERS_LOADING
    }
}
export const getUsers = () => {
    const payload = axios.get("http://localhost:3001/users");
    return {
        type: GET_USERS,
        payload

    }
}
export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        users

    }
}
export const getUsersFailure = (error) => {
    return {
        type: GET_USERS_FAILURE,
        error
    }
}