import Axios from 'axios';

// Action Types

// Get All Requests

export const GET_REQUESTS_LOADING = 'GET_REQUESTS_LOADING';
export const GET_REQUESTS = 'GET_REQUESTS';
export const GET_REQUESTS_SUCCESS = 'GET_REQUESTS_SUCCESS';
export const GET_REQUESTS_FAILURE = 'GET_REQUESTS_FAILURE';

//Get Request

export const GET_REQUEST_LOADING = 'GET_REQUEST_LOADING';
export const GET_REQUEST = 'GET_REQUEST';
export const GET_REQUEST_SUCCESS = 'GET_REQUEST_SUCCESS';
export const GET_REQUEST_FAILURE = 'GET_REQUEST_FAILURE';


// Edit request

export const EDIT_REQUEST_LOADING = 'EDIT_REQUEST_LOADING';
export const EDIT_REQUEST = 'EDIT_REQUEST';
export const EDIT_REQUEST_SUCCESS = 'EDIT_REQUEST_SUCCESS';
export const EDIT_REQUEST_FAILURE = 'EDIT_REQUEST_FAILURE';
//Action Creators

// Get all requests
export const getRequestsLoading = () => {
    return {
        type: GET_REQUESTS_LOADING
    }
}
export const getRequests = () => {
    const payload = Axios.get("http://localhost:3001/requests");
    return {
        type: GET_REQUESTS,
        payload
    }
}
export const getRequestsSuccess = (requests) => {
    return {
        type: GET_REQUESTS_SUCCESS,
        requests
    }
}
export const getRequestsFailure = (error) => {
    return {
        type: GET_REQUESTS_FAILURE,
        error
    }
}

//Get request

export const getRequestLoading = () => {
    return {
        type: GET_REQUEST_LOADING
    }
}
export const getRequest = (id) => {
    const payload = Axios.get(`http://localhost:3001/requests/${id}`);
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

// Edit request
export const editRequestLoading = (id) => {
  return {
    type: EDIT_REQUEST_LOADING,
    id
  }
}
export const editRequest = (id, value) => {
  const payload = Axios.patch(`http://localhost:3001/requests/${id}`, value);
  return {
    type: EDIT_REQUEST,
    payload
  }
}
export const editRequestSuccess = (request) => {
  return {
    type: EDIT_REQUEST_SUCCESS,
    request
  }
}
export const editRequestFailure = (data) => {
  return {
    type: EDIT_REQUEST_FAILURE,
    data
  }
}
