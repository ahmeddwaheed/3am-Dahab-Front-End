import {connect} from 'react-redux';
import Users from '../../Components/Users';
import {getUsersLoading, getUsers, getUsersSuccess, getUsersFailure} from '../../Actions/Users';

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        users: state.users.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsersLoading());
            dispatch(getUsers()).then(response => {
                if(response.payload.status < 400){
                    dispatch(getUsersSuccess(response.payload.data));
                }
                else {
                    dispatch(getUsersFailure(response.payload.message));
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);