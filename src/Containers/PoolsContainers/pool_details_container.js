import { connect } from 'react-redux';
import Pools from '../../Components/Pools';
import Details from '../../Components/PoolDetails';
import {
  getPoolLoading, getPool, getPoolSuccess, getPoolFailure,
} from '../../Actions/Pools';

const mapStateToProps = (state) => {
  return {
    pools: state.pools.pools,
    pool: state.pools.pool.data,
    userCard: state.pools.pool.userCard,
    loading: state.pools.loading,
    adding: state.pools.adding,
    error: state.pools.error,
    errorAdding: state.pools.errorAdding,
    isUser: state.authUser.isUser,
    isAdmin: state.authAdmin.isAdmin
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
            }, 1000)
        }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
