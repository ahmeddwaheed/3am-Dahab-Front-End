import {connect} from 'react-redux';
import UserCard from '../../Components/UserCard';
import {getUserLoading, getUser, getUserSuccess, getUserFailure,
        getRequest, getRequestSuccess, getRequestFailure,
        addSeat, addSeatSucces, addSeatFailure} from '../../Actions/UserCard';

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        user: state.authUser.user.user,
        request: state.request.request
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
        },
        getRequest: (pool_id) => {
            setTimeout (() => {
                dispatch(getRequest(pool_id)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getRequestSuccess(response.payload.data));
                    }
                    else {
                        dispatch(getRequestFailure(response.payload.message));
                    }
                })
            }, 1000)
        },
        addSeat :(request) => {
            dispatch(addSeat(request)).then(response => {
                if(response.payload.status < 400){
                    dispatch(addSeatSucces(response.payload.data));
                }
                else {
                    dispatch(addSeatFailure(response.payload.message));
                }
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserCard);