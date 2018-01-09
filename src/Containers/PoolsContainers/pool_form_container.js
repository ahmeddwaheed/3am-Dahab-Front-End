import { connect } from 'react-redux';
import Form from '../../Components/PoolForm';
import {

  addPoolLoading, addPool, addPoolSuccess, addPoolFailure,

} from '../../Actions/Pools';

const mapStateToProps = (state) => {
  return {
    pools: state.pools.pools,
    loading: state.pools.loading,
    adding: state.pools.adding,
    error: state.pools.error,
    errorAdding: state.pools.errorAdding
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      addPool: (pool, callback) => {
          dispatch(addPoolLoading());
          setTimeout(() => {
              dispatch(addPool(pool)).then(response => {
                  if(response.payload.status < 400){
                      dispatch(addPoolSuccess(response.payload.data.data));
                  }else{
                      dispatch(addPoolFailure(response.payload.message));
                  }
              })
          }, 2000)
      }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
