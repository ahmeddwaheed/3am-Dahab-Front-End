import { SET_CURRENT_USER } from '../Actions/UserCard';
import isEmpty from 'lodash';

const INTIAL_STATE = {
    isAuthenticated: false,
    user: {}
};

export default  (currentState = INTIAL_STATE, action) => {
    switch(action.tpye){
        case SET_CURRENT_USER:
            return {...currentState, isAuthenticated:!isEmpty(action.user), user: action.user};
        default: return currentState;
    }
}