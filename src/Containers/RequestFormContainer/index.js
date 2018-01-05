import { connect } from 'react-redux';
import Request from '../../Components/RequestForm';
import {
  addRequestLoading, addRequest, addRequestSuccess, addRequestFailure,
} from '../../Actions/RequestForm';

const mapStateToProps = (state) => {
  return {
    requests: state.requests,
    loading: state.loading,
    adding: state.adding,
    error: state.error,
    errorAdding: state.errorAdding
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
                      console.log('prooooops',this.props)

                  }else{
                      dispatch(addRequestFailure(response.payload.message));
                  }
              })
          }, 1000)
      },

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Request);
