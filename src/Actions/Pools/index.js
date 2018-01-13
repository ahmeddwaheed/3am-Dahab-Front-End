import Axios from 'axios';
import { getPoolsApi, poolApi, addPoolApi, userPoolApi, deleteUserPoolApi} from '../../api';


// Action Types

// Get all pools

export const GET_POOLS_LOADING = 'GET_POOLS_LOADING';
export const GET_POOLS = 'GET_POOLS';
export const GET_POOLS_SUCCESS = 'GET_POOLS_SUCCESS';
export const GET_POOLS_FAILURE = 'GET_POOLS_FAILURE';
//
// Get pool

export const GET_POOL_LOADING = 'GET_POOL_LOADING';
export const GET_POOL = 'GET_POOL';
export const GET_POOL_SUCCESS = 'GET_POOL_SUCCESS';
export const GET_POOL_FAILURE = 'GET_POOL_FAILURE';

// Add pool

export const ADD_POOL_LOADING = 'ADD_POOL_LOADING';
export const ADD_POOL = 'ADD_POOL';
export const ADD_POOL_SUCCESS = 'ADD_POOL_SUCCESS';
export const ADD_POOL_FAILURE = 'ADD_POOL_FAILURE';

// Edit pool

export const EDIT_POOL_LOADING = 'EDIT_POOL_LOADING';
export const EDIT_POOL = 'EDIT_POOL';
export const EDIT_POOL_SUCCESS = 'EDIT_POOL_SUCCESS';
export const EDIT_POOL_FAILURE = 'EDIT_POOL_FAILURE';

// delete pool

export const DELETE_POOL_LOADING = 'DELETE_POOL_LOADING';
export const DELETE_POOL = 'DELETE_POOL';
export const DELETE_POOL_SUCCESS = 'DELETE_POOL_SUCCESS';
export const DELETE_POOL_FAILURE = 'DELETE_POOL_FAILURE';

// add seat


export const ADD_SEAT = 'ADD_SEAT';
export const ADD_SEAT_SUCCESS = 'ADD_SEAT_SUCCESS';
export const ADD_SEAT_FAILURE = 'ADD_SEAT_FAILURE';


// delete seat

export const DELETE_SEAT = 'DELETE_SEAT';
export const DELETE_SEAT_SUCCESS = 'DELETE_SEAT_SUCCESS';
export const DELETE_SEAT_FAILURE = 'DELETE_SEAT_FAILURE';

//Action Creators

//Get all pools
export const getPoolsLoading = () =>{
  return{
    type: GET_POOLS_LOADING
  }
}
export const getPools = (status) => {
  const payload = Axios.get(getPoolsApi(status));
  return {
    type: GET_POOLS,
    payload
  }
}
export const getPoolsSuccess = (pools) => {
  return {
    type: GET_POOLS_SUCCESS,
    pools
  }
}
export const getPoolsFailure = (error) => {
  return {
    type:  GET_POOLS_FAILURE,
    error
  }
}

//Get pool
export const getPoolLoading = () =>{
  return{
    type: GET_POOL_LOADING
  }
}
export const getPool = (id) => {
  const payload = Axios.get(poolApi(id));
  return {
    type: GET_POOL,
    payload
  }
}
export const getPoolSuccess = (pool) => {
  return {
    type: GET_POOL_SUCCESS,
    pool
  }
}
export const getPoolFailure = (error) => {
  return {
    type:  GET_POOL_FAILURE,
    error
  }
}

// Add pool   poolsApi
export const addPoolLoading = () => {
  return {
    type: ADD_POOL_LOADING
  }
}
export const addPool = (pool) => {
  const payload = Axios.post(addPoolApi, pool)
  return {
    type: ADD_POOL,
    payload
  }
};
export const addPoolSuccess = (pool) => {
  return {
    type: ADD_POOL_SUCCESS,
    pool
  }
}
export const addPoolFailure = (error) => {
  return {
    type: ADD_POOL_FAILURE,
    error
  }
}

// Edit pool
export const editPoolLoading = (id) => {
  return {
    type: EDIT_POOL_LOADING,
    id
  }
}
export const editPool = (id, edit) => {
  const payload = Axios.patch(poolApi(id), edit);
  return {
    type: EDIT_POOL,
    payload
  }
}
export const editPoolSuccess = (pool) => {
  return {
    type: EDIT_POOL_SUCCESS,
    pool
  }
}
export const editPoolFailure = (data) => {
  return {
    type: EDIT_POOL_FAILURE,
    data
  }
}

// Delete pool
export const deletePoolLoading = (id) => {
  return {
    type: DELETE_POOL_LOADING,
    id
  }
}
export const deletePool = (id) => {
  const payload = Axios.delete(poolApi);
  return {
    type: DELETE_POOL,
    payload
  }
}
export const deletePoolSuccess = (id) => {
  return {
    type: DELETE_POOL_SUCCESS,
    id
  }
}
export const deletePoolFailure = (id) => {
  return {
    type: DELETE_POOL_FAILURE,
    id
  }
}
export const addSeat = (user) => {
  const payload = Axios.post(userPoolApi, user);
  return {
      type: ADD_SEAT,
      payload
  }
}
export const addSeatSucces = (user) => {
  return {
      type: ADD_SEAT_SUCCESS,
      user
  }
}
export const addSeatFailure = (error) => {
  return {
      type: ADD_SEAT_FAILURE,
      error
  }
}
export const deleteSeat = (id) => {
  const payload = Axios.delete(deleteUserPoolApi(id));
  return {
      type: DELETE_SEAT,
      payload
  }
}
export const deleteSeatSucces = (id) => {
  return {
      type: DELETE_SEAT_SUCCESS,
      id
  }
}
export const deleteSeatFailure = (error) => {
  return {
      type: DELETE_SEAT_FAILURE,
      error
  }
}