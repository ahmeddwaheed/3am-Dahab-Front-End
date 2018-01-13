import { connect } from 'react-redux';
import Pools from '../../Components/Pools';
import {
  getPoolsLoading, getPools, getPoolsSuccess, getPoolsFailure,
  getPoolLoading, getPool, getPoolSuccess, getPoolFailure,
  addPoolLoading, addPool, addPoolSuccess, addPoolFailure,
  editPoolLoading, editPool, editPoolSuccess, editPoolFailure,
  deletePoolLoading, deletePool, deletePoolSuccess, deletePoolFailure
} from '../../Actions/Pools';

const mapStateToProps = (state) => {
  return {
    pools: state.pools.pools,
    loading: state.pools.loading,
    adding: state.pools.adding,
    error: state.pools.error,
    errorAdding: state.pools.errorAdding,
    currentUser: state.authUser.user,
    isUser: state.authUser.isUser,
    isAdmin: state.authAdmin.isAdmin
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPools: (status) => {
          dispatch(getPoolsLoading(status));
          setTimeout(() => {
              dispatch(getPools(status)).then(response => {
                  if(response.payload.status < 400){
                      dispatch(getPoolsSuccess(response.payload.data));
                  }else{
                      dispatch(getPoolsFailure(response.payload.message));
                  }
              })
          }, 1000)
      },
      addPool: (content, callback) => {
          dispatch(addPoolLoading());
          setTimeout(() => {
              dispatch(addPool(content)).then(response => {
                  if(response.payload.status < 400){
                      dispatch(addPoolSuccess(response.payload.data));
                      callback();
                  }else{
                      dispatch(addPoolFailure(response.payload.message));
                  }
              })
          }, 1000)
      },
      editPool: (id, type, value) => {
          dispatch(editPoolLoading(id));
          setTimeout(() => {
              dispatch(editPool(id, {[type]: value})).then(response => {
                  if(response.payload.status < 400){
                      dispatch(editPoolSuccess(response.payload.data));
                  }else{
                      dispatch(editPoolFailure(response.payload.message));
                  }
              })
          }, 1000)
      },
      deletePool: (id) => {
          dispatch(deletePoolLoading(id));
          setTimeout(() => {
              dispatch(deletePool(id)).then(response => {
                  if(response.payload.status < 400){
                      dispatch(deletePoolSuccess(id));
                  }else{
                      dispatch(deletePoolFailure(id));
                  }
              })
          }, 1000)
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pools);
