import {
    GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_FAILURE
} from '../Actions/UserCard';

const INITIAL_STATE = {
    loading: false,
    error: null,
    user: ""
}
export default function(currentState = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER_LOADING:
            return {... currentState, loading: true};
        case GET_USER_SUCCESS:
            return {...currentState, user: action.user, loading: false};
        case GET_USER_FAILURE:
            return {...currentState, error: action.error};
        default:
            return currentState;
    }
}
