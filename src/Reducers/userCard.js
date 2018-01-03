import {
    GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_FAILURE,
    GET_REQUEST_SUCCESS, GET_REQUEST_FAILURE,
    ADD_SEAT_SUCCESS, ADD_SEAT_FAILURE,
    ADD_USER_SUCCESS, ADD_USER_FAILURE, ADD_USER_LOADING,
    USER_SIGN_IN_SUCCESS, USER_SIGN_IN_LOADING, USER_SIGN_IN_FAILURE
} from '../Actions/UserCard';

const INITIAL_STATE = {
    loading: false,
    error: null,
    user: "",
    request: "",
}
export default function(currentState = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER_LOADING:
            return {... currentState, loading: true};
        case GET_USER_SUCCESS:
            return {...currentState, user: action.user, loading: false};
        case GET_USER_FAILURE:
            return {...currentState, error: action.error, loading: false};
        case GET_REQUEST_SUCCESS:
            return {...currentState, request: action.request};
        case GET_REQUEST_FAILURE:
            return {... currentState, error: action.error}
        case ADD_SEAT_SUCCESS:
            return {...currentState, seat: action.seat};
        case ADD_SEAT_FAILURE:
            return {...currentState, error: action.error};
        case ADD_USER_LOADING:
            return {...currentState, loading: true};
        case ADD_USER_SUCCESS:
            return {...currentState, user: action.user, loading: false};
        case ADD_USER_FAILURE:
            return {...currentState, error: action.error, loading: false};
        case USER_SIGN_IN_LOADING:
            return {...currentState, loading: true};
        case USER_SIGN_IN_SUCCESS:
            return {...currentState, user: action.user, loading: false};
        case USER_SIGN_IN_FAILURE:
            return {...currentState, error:action.error, loading: false};
        default:
            return currentState;
    }
}
