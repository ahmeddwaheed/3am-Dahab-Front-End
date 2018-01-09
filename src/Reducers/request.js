import {
  GET_REQUESTS_LOADING, GET_REQUESTS_SUCCESS, GET_REQUESTS_FAILURE,
  GET_REQUEST_LOADING, GET_REQUEST_SUCCESS, GET_REQUEST_FAILURE,
  EDIT_REQUEST_LOADING, EDIT_REQUEST_SUCCESS, EDIT_REQUEST_FAILURE,

} from '../Actions/Requests';

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
    //Get all requests
    case GET_REQUESTS_LOADING:

      return {...currentState, loading: true};

    case GET_REQUESTS_SUCCESS:
      return {...currentState, loading: false, requests: action.requests};

    case GET_REQUESTS_FAILURE:
      return {...currentState, loading: false, error: action.error};

    //Get request
    case GET_REQUEST_LOADING:
      return {...currentState, loading: true};
    case GET_REQUEST_SUCCESS:
      return {...currentState, loading: false, request: action.request.data};
    case GET_REQUEST_FAILURE:
      return {...currentState, loading: false, error: action.error};

    // Edit request
    case EDIT_REQUEST_LOADING:
      var newRequests = currentState.requests.map(request => {
        if (request.id == action.id) request.loading = true;
        return request;
      })
      return {...currentState, requests: newRequests}
    case EDIT_REQUEST_SUCCESS:
      var newRequests = currentState.requests.map(request => {
        if(request.id == action.request.id) {request.loading = false; request = action.request}
        return request;
      })
      return {...currentState, requests: newRequests}
    case EDIT_REQUEST_FAILURE:
      var newRequests = currentState.requests.map(request => {
        if(request.id == action.id) {request.loading = false; request.error = action.error}
        return request;
      })
      return {...currentState, requests: newRequests}


    default:
      return currentState;
  }
}
