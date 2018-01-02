import { connect } from 'react-redux';
import Requests from '../../Components/Requests';
import {
  getRequestsLoading, getRequests, getRequestsSuccess, getRequestsFailure,
  getRequestLoading, getRequest, getRequestSuccess, getRequestFailure,
  editRequestLoading, editRequest, editRequestSuccess, editRequestFailure,
} from '../../Actions/Requests';

const mapStateToProps = (state) => {
  console.log("FEEEEEEN EL STAAAATE", state.requests);
  return {
    requests: state.requests.requests,
    loading: state.requests.loading,
    adding: state.requests.adding,
    error: state.requests.error,
    errorAdding: state.requests.errorAdding
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getRequests: () => {
          dispatch(getRequestsLoading());
          setTimeout(() => {
              dispatch(getRequests()).then(response => {
                  if(response.payload.status < 400){
                      dispatch(getRequestsSuccess(response.payload.data));
                      console.log('hello from success container');
                      console.log(response.payload.data);
                  }else{
                      dispatch(getRequestsFailure(response.payload.message));
                      console.log('hello from failure container');
                      console.log(response.payload);
                  }
              })
          }, 1000)
      },

      getRequest: (id) => {
            dispatch(getRequestLoading(id));
            setTimeout(() => {
                dispatch(getRequest(id)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getRequestSuccess(response.payload.data));
                    }else{
                        dispatch(getRequestFailure(response.payload.message));
                    }
                })
            }, 1000)
        },

      editRequest: (id, value) => {
          dispatch(editRequestLoading(id));
          setTimeout(() => {
              dispatch(editRequest(id, value)).then(response => {
                  if(response.payload.status < 400){
                      dispatch(editRequestSuccess(response.payload.data));
                  }else{
                      dispatch(editRequestFailure(response.payload.message));
                  }
              })
          }, 1000)
      }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
