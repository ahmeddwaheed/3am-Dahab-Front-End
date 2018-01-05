import { connect } from 'react-redux';
import Form from '../../Components/PoolLaunchForm';
import {
  getPoolLoading, getPool, getPoolSuccess, getPoolFailure,
  editPoolLoading, editPool, editPoolSuccess, editPoolFailure
} from '../../Actions/Pools';


const mapStateToProps = (state) => {
  return {
    pool: state.pools.pool,
    loading: state.pools.loading,
    adding: state.pools.adding,
    error: state.pools.error,
    errorAdding: state.pools.errorAdding
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      getPool: (id) => {
          dispatch(getPoolLoading(id));
          setTimeout(() => {
              dispatch(getPool(id)).then(response => {
                  if(response.payload.status < 400){
                      dispatch(getPoolSuccess(response.payload.data));
                  }else{
                      dispatch(getPoolFailure(response.payload.message));
                  }
              })
          }, 0)
      },
      editPool: (id,value) => {
          dispatch(editPoolLoading(id));
          setTimeout(() => {
              dispatch(editPool(id, value)).then(response => {
                  if(response.payload.status < 400){
                      dispatch(editPoolSuccess(response.payload.data));
                  }else{
                      dispatch(editPoolFailure(response.payload.message));
                  }
              })
          }, 2000)
      },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
