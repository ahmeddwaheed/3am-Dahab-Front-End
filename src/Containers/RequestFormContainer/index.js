import { connect } from 'react-redux';
import Request from '../../Components/RequestForm';
import {
  addRequestLoading, addRequest, addRequestSuccess, addRequestFailure,
} from '../../Actions/RequestForm';

const mapStateToProps = (state) => {
    console.log("EL STATE", state);
  return {
    requests: state.requests,
    loading: state.loading,
    adding: state.adding,
    error: state.error,
    errorAdding: state.errorAdding,
    user: state.authUser.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addRequest: (request, callback) => {
          dispatch(addRequestLoading());
          setTimeout(() => {
              dispatch(addRequest(request)).then(response => {
                  if(response.payload.status < 400){
                      dispatch(addRequestSuccess(response.payload.data.data));

                  }else{
                      dispatch(addRequestFailure(response.payload.message));
                  }
              })
          }, 1000)
      },

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Request);
