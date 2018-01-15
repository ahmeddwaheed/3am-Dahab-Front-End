import {
  ADD_REQUEST_LOADING, ADD_REQUEST_SUCCESS, ADD_REQUEST_FAILURE,
} from '../Actions/RequestForm';

const INITIAL_STATE = {
  requests: [],
  request: {},
  loading: false,
  adding: false,
  error: null,
  errorAdding: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch(action.type) {

    //Add request
    case ADD_REQUEST_LOADING:
      return {...currentState, adding: true};
    case ADD_REQUEST_SUCCESS:
      return {...currentState, adding: false, requests: [...currentState.requests, action.request]};
    case ADD_REQUEST_FAILURE:
      return {...currentState, adding: false, errorAdding: action.error};
    default:
      return currentState;
  }
}
