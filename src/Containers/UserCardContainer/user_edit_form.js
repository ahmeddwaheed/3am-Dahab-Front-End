import {connect} from 'react-redux';
import UserForm from '../../Components/UserEdit';
import { editUser, editUserSuccess, editUserFailure} from '../../Actions/UserCard';
import history from '../../history';


const mapStateToProps = (state) => {
    return {
        message: state.userCard.user.status,
        loading: state.userCard.user.loading,
        error: state.userCard.error,
        user: state.authUser.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (id, user) => {
            dispatch(editUser(id, user)).then(response => {
                if(response.payload.status < 400){
                  debugger;
                    dispatch(editUserSuccess(response.payload.data.data))
                    history.push('/pools');
                }
                else {
                    // var payload = JSON.parse(response.payload.request.response);
                    dispatch(editUserFailure(response.payload.message))
                    history.push('/profile/edit');
                }
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
