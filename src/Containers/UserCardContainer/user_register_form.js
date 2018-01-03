import {connect} from 'react-redux';
import UserForm from '../../Components/UserSignUp';
import { addUserLoading, addUser, addUserSuccess, addUserFailure} from '../../Actions/UserCard';

const mapStateToProps = (state) => {
    return {
        message: state.userCard.user,
        loading: state.userCard.loading,
        error: state.userCard.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch(addUserLoading());
            setTimeout(() => {
                dispatch(addUser(user)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(addUserSuccess(response.payload.data))
                    }
                    else {
                        dispatch(addUserFailure(response.payload.request.response))
                    }
                })
            }, 1000);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);