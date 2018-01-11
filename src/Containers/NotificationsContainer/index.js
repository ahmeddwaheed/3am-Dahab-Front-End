import { connect } from 'react-redux';
import Notifications from '../../Components/Notifications';
import {
  getNotificationsLoading, getNotifications, getNotificationsSuccess, getNotificationsFailure,
} from '../../Actions/Notifications';

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications.notifications,
    loading: state.notifications.loading,
    adding: state.notifications.adding,
    error: state.notifications.error,
    errorAdding: state.notifications.errorAdding,
    user_token: state.authUser.user.auth_token
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getNotifications: () => {
          dispatch(getNotificationsLoading());
          setTimeout(() => {
              dispatch(getNotifications()).then(response => {
                  if(response.payload.status < 400){
                      dispatch(getNotificationsSuccess(response.payload.data));
                      console.log('hello from container');
                      console.log(response.payload.data);
                  }else{
                      dispatch(getNotificationsFailure(response.payload.message));
                      console.log('hello from failure container');
                      console.log(response.payload);
                  }
              })
          }, 2000)
      },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
