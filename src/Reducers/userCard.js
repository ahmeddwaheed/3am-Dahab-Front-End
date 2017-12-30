import {
    GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_FAILURE,
    GET_REQUEST_SUCCESS, GET_REQUEST_FAILURE, getRequestFailure
} from '../Actions/UserCard';

const INITIAL_STATE = {
    loading: false,
    error: null,
    user: "",
    request: ""
}
export default function(currentState = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER_LOADING:
            return {... currentState, loading: true};
        case GET_USER_SUCCESS:
            return {...currentState, user: action.user, loading: false};
        case GET_USER_FAILURE:
            return {...currentState, error: action.error};
        case GET_REQUEST_SUCCESS:
            return {...currentState, request: action.request};
        case getRequestFailure:
            return {... currentState, error: action.error}
        default:
            return currentState;
    }
}
