import {
  GET_POOLS_LOADING, GET_POOLS_SUCCESS, GET_POOLS_FAILURE,
  GET_POOL_LOADING, GET_POOL_SUCCESS, GET_POOL_FAILURE,
  ADD_POOL_LOADING, ADD_POOL_SUCCESS, ADD_POOL_FAILURE,
  EDIT_POOL_LOADING, EDIT_POOL_SUCCESS, EDIT_POOL_FAILURE,
  DELETE_POOL_LOADING, DELETE_POOL_SUCCESS, DELETE_POOL_FAILURE
} from '../Actions/Pools';

const INITIAL_STATE = {
  pools: [],
  pool: {},
  loading: false,
  adding: false,
  error: null,
  errorAdding: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    //Get all pools
    case GET_POOLS_LOADING:
      return {...currentState, loading: true};

    case GET_POOLS_SUCCESS:
      return {...currentState, loading: false, pools: action.pools.data};

    case GET_POOLS_FAILURE:
      return {...currentState, loading: false, error: action.error};

    //Get Pool
    case GET_POOL_LOADING:
      return {...currentState, loading: true};
    case GET_POOL_SUCCESS:
      return {...currentState, loading: false, pool: action.pool};
    case GET_POOL_FAILURE:
      return {...currentState, loading: false, error: action.error};

    //Add pool
    case ADD_POOL_LOADING:
      return {...currentState, adding: true};
    case ADD_POOL_SUCCESS:

      return {...currentState, adding: false, pools: [...currentState.pools, action.pool]};
    case ADD_POOL_FAILURE:
      return {...currentState, adding: false, errorAdding: action.error};

    // Edit pool
    case EDIT_POOL_LOADING:
      var newPools = currentState.pools.map(pool => {
        if (pool.id == action.id) pool.loading = true;
        return pool;
      })
      return {...currentState, pools: newPools}
    case EDIT_POOL_SUCCESS:
      var newPools = currentState.pools.map(pool => {
        if(pool.id == action.id) {pool.loading = false; pool = action.pool}
        return pool;
      })
      return {...currentState, pools: newPools}
    case EDIT_POOL_FAILURE:
      var newPools = currentState.pools.map(pool => {
        if(pool.id == action.id) {pool.loading = false; pool.error = action.error}
        return pool;
      })
      return {...currentState, pools: newPools}

    // Delete pool
    case DELETE_POOL_LOADING:
      var newPools = currentState.pools.map(pool => {
        if (pool.id == action.id) pool.loading = true;
        return pool;
      })
      return {...currentState, pools: newPools}
    case DELETE_POOL_SUCCESS:
      var newPools = currentState.pools.filter(pool => {
        pool.id !== action.id
      })
      return {...currentState, pools: newPools}
    case DELETE_POOL_FAILURE:
      var newPools = currentState.pools.map(pool => {
        if (pool.id == action.id) {pool.loading = false; pool.error = action.error}
        return pool;
      })
      return {...currentState, pools: newPools}
    default:
      return currentState;
  }
}
