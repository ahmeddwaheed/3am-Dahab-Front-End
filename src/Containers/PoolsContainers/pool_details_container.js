import { connect } from 'react-redux';
import Pools from '../../Components/Pools';
import Details from '../../Components/PoolDetails';
import {getPoolLoading, getPool, getPoolSuccess, getPoolFailure,
    addSeat, addSeatSucces, addSeatFailure,
    deleteSeat, deleteSeatSucces, deleteSeatFailure} from '../../Actions/Pools';

const mapStateToProps = (state) => {
  return {
    pools: state.pools,
    pool: state.pools.pool.data,
    userCard: state.pools.pool.userCard,
    loading: state.pools.loading,
    adding: state.pools.adding,
    error: state.pools.error,
    errorAdding: state.pools.errorAdding,
    isUser: state.authUser.isUser,
    isAdmin: state.authAdmin.isAdmin,
    user: state.authUser.user,
    adding_seat: state.pools.adding_seat
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
        },
        addSeat :(user) => {
            dispatch(addSeat(user)).then(response => {
                if(response.payload.status < 400){
                    dispatch(addSeatSucces(response.payload.data.users_pools));
                }
                else {
                    dispatch(addSeatFailure(response.payload.message));
                }
            })
        },
        deleteSeat :(id) => {
            dispatch(deleteSeat(id)).then(response => {
                if(response.payload.status < 400){
                    dispatch(deleteSeatSucces(id));
                }
                else {
                    dispatch(deleteSeatFailure(response.payload.message));
                }
            })
        }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
