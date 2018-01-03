import {connect} from 'react-redux';
import NavBar from '../../Components/NavigationBar';
import history from '../../history';
import { userLogout, setCurrentUser } from '../../Actions/Authentication';
import setAutherizationToken from './utils/setAuthrizationToken';
import jwt from 'jsonwebtoken';


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => {
            dispatch(userLogout())
            localStorage.removeItem('jwtToken');
            setAutherizationToken(false);
            dispatch(setCurrentUser({}));
            history.push('/');
        }
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
