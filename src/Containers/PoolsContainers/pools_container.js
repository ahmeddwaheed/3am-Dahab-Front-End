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
    errorAdding: state.pools.errorAdding
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPools: () => {
          dispatch(getPoolsLoading());
          setTimeout(() => {
              dispatch(getPools()).then(response => {
                  if(response.payload.status < 400){
                      dispatch(getPoolsSuccess(response.payload.data));
                      console.log(response.payload.data);
                  }else{
                      dispatch(getPoolsFailure(response.payload.message));
                      console.log(response.payload);
                  }
              })
          }, 2000)
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
          }, 2000)
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
          }, 2000)
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
          }, 2000)
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pools);
