import {
  GET_NOTIFICATIONS_LOADING, GET_NOTIFICATIONS_SUCCESS, GET_NOTIFICATIONS_FAILURE,

} from '../Actions/Notifications';

const INITIAL_STATE = {
  notifications: [],
  notification: {},
  loading: false,
  adding: false,
  error: null,
  errorAdding: null
}

export default (currentState = INITIAL_STATE, action) => {
  switch(action.type) {
    //Get all notifications
    case GET_NOTIFICATIONS_LOADING:
      console.log('hello from reducer!!!!');
      console.log(currentState);

      return {...currentState, loading: true};

    case GET_NOTIFICATIONS_SUCCESS:
      console.log('hello from reducer');
      console.log(action.notifications.data);
      return {...currentState, loading: false, notifications: action.notifications.data};

    case GET_NOTIFICATIONS_FAILURE:
      return {...currentState, loading: false, error: action.error};

    default:
      return currentState;
  }
}
