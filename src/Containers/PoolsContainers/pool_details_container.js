import { connect } from 'react-redux';
import Pools from '../../Components/Pools';
import Details from '../../Components/PoolDetails';
import {
  getPoolLoading, getPool, getPoolSuccess, getPoolFailure,
} from '../../Actions/pools';

const mapStateToProps = (state) => {
  return {
    pools: state.pools.pools,
    pool: state.pools.pool,
    loading: state.pools.loading,
    adding: state.pools.adding,
    error: state.pools.error,
    errorAdding: state.pools.errorAdding,

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
            }, 2000)
        },
      // getPools: () => {
      //       dispatch(getPoolsLoading());
      //       setTimeout(() => {
      //           dispatch(getPools()).then(response => {
      //               if(response.payload.status < 400){
      //                   dispatch(getPoolsSuccess(response.payload.data));
      //               }else{
      //                   dispatch(getPoolsFailure(response.payload.message));
      //               }
      //           })
      //       }, 2000)
      //   },
      // addPool: (content, callback) => {
      //     dispatch(addPoolLoading());
      //     setTimeout(() => {
      //         dispatch(addPool(content)).then(response => {
      //             if(response.payload.status < 400){
      //                 dispatch(addPoolSuccess(response.payload.data));
      //                 callback();
      //             }else{
      //                 dispatch(addPoolFailure(response.payload.message));
      //             }
      //         })
      //     }, 2000)
      // },
    ////
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
