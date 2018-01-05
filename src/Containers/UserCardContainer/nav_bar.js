import {connect} from 'react-redux';
import NavBar from '../../Components/NavigationBar';
import history from '../../history';
import { userLogout} from '../../Actions/Authentication';
import setAutherizationToken from './utils/setAuthrizationToken';
import jwt from 'jsonwebtoken';


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
        }
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
