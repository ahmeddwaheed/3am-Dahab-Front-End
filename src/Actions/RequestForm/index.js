import Axios from 'axios';
import {requestApi} from '../../api';

// Action Types

export const ADD_REQUEST_LOADING = 'ADD_REQUEST_LOADING';
export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_REQUEST_SUCCESS = 'ADD_REQUEST_SUCCESS';
export const ADD_REQUEST_FAILURE = 'ADD_REQUEST_FAILURE';

//Action Creators

// Add request
export const addRequestLoading = () => {
  return {
    type: ADD_REQUEST_LOADING
  }
}
export const addRequest = (request) => {
  const payload = Axios.post(requestApi, request)
  return {
    type: ADD_REQUEST,
    payload
  }
};
export const addRequestSuccess = (request) => {
  return {
    type: ADD_REQUEST_SUCCESS,
    request
  }
}
export const addRequestFailure = (error) => {
  return {
    type: ADD_REQUEST_FAILURE,
    error
  }
}
