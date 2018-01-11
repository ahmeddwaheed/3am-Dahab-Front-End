import {
  GET_POOLS_LOADING, GET_POOLS_SUCCESS, GET_POOLS_FAILURE,
  GET_POOL_LOADING, GET_POOL_SUCCESS, GET_POOL_FAILURE,
  ADD_POOL_LOADING, ADD_POOL_SUCCESS, ADD_POOL_FAILURE,
  EDIT_POOL_LOADING, EDIT_POOL_SUCCESS, EDIT_POOL_FAILURE,
  DELETE_POOL_LOADING, DELETE_POOL_SUCCESS, DELETE_POOL_FAILURE,
  ADD_SEAT_SUCCESS, ADD_SEAT_FAILURE
} from '../Actions/Pools';

const INITIAL_STATE = {
  pools: [],
  pool: {},
  loading: false,
  adding: false,
  error: null,
  errorAdding: null,
  seat: {}
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
      var newPools = currentState.pools.slice(0);
      const updatedPool = action.pool.data;
      const position = newPools.findIndex(pool => pool.id === updatedPool.id);
      newPools[position] = updatedPool;
      return {...currentState, pools: newPools, loading: false}
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
        return pool.id !== action.id
      })
      return {...currentState, pools: newPools}
    case DELETE_POOL_FAILURE:
      var newPools = currentState.pools.map(pool => {
        if (pool.id == action.id) {pool.loading = false; pool.error = action.error}
        return pool;
      })
      return {...currentState, pools: newPools};

      case ADD_SEAT_SUCCESS:
      var newSeat = action.user
      var hamada = currentState.pool.userCard.map(card => {
        if(card.position == newSeat.position){
          card = newSeat
        }
        return card
      })
        var newPool = {...currentState.pool};
        newPool.userCard = hamada;
        return {...currentState, pool: newPool}
      case ADD_SEAT_FAILURE:
        return {...currentState, error: action.error};

    default:
      return currentState;
  }
}
