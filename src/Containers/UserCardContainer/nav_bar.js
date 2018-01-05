import {connect} from 'react-redux';
import NavBar from '../../Components/NavigationBar';
import history from '../../history';
import setAutherizationToken from './utils/setAuthrizationToken';
import jwt from 'jsonwebtoken';
import {userLogout, setCurrentUser , setCurrentUserSuccess, setCurrentUserFailure} from '../../Actions/Authentication';



const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => {
            dispatch(userLogout())
            localStorage.removeItem('jwtToken');
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
        }
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
