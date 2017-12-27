import {connect} from 'react-redux';
import UserCard from '../../Components/UserCard';
import {getUserLoading, getUser, getUserSuccess, getUserFailure} from '../../Actions/UserCard';

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        user: state.userCard.user
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


export default connect(mapStateToProps, mapDispatchToProps)(UserCard);