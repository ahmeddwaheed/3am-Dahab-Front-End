import {connect} from 'react-redux';
import User from '../../Components/UserHeader';
import Admin from '../../Components/AdminHeader';
import history from '../../history';
import setAutherizationToken from './utils/setAuthrizationToken';
import {userLogout, setCurrentUser , setCurrentUserSuccess, setCurrentUserFailure,
    setCurrentAdmin, setCurrentAdminSuccess, setCurrentAdminFailure} from '../../Actions/Authentication';



const mapStateToProps = (state) => {
    return {
        authUser: state.authUser,
        user: state.authUser.user,
        isUser: state.authUser.isUser,
        isAdmin: state.authAdmin.isAdmin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => {
            dispatch(userLogout())
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('isUser');
            localStorage.removeItem('isAdmin');
            setAutherizationToken(false);
            history.push('/');
        },
        setCurrentUser: () => {
            dispatch(setCurrentUser()).then(response => {
                if(response.payload.status < 400){
                    dispatch(setCurrentUserSuccess(response.payload.data))
                }
                else {
                    dispatch(setCurrentUserFailure(response.payload.error))
                }
            })
        },
        setCurrentAdmin: () => {
            dispatch(setCurrentAdmin()).then(response => {
                if(response.payload.status < 400){
                    dispatch(setCurrentAdminSuccess(response.payload.data))
                }
                else{
                    dispatch(setCurrentAdminFailure(response.payload.error))
                }
            })
        }
     }
}
export const UserHeader = connect(mapStateToProps, mapDispatchToProps)(User);
export const AdminHeader = connect(mapStateToProps, mapDispatchToProps)(Admin);
