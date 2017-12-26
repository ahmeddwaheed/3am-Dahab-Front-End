import {connect} from 'react-redux';
import UserDetails from '../../Components/UserDetails';
import {getUserLoading, getUser, getUserSuccess, getUserFailure} from '../../Actions/UserDetails';

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        user: state.userDetails.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => {
            dispatch(getUserLoading());
            setTimeout (() => {
                dispatch(getUser(id)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getUserSuccess(response.payload.data.user));
                    }
                    else {
                        dispatch(getUserFailure(response.payload.message));
                    }
                }), 1000
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);