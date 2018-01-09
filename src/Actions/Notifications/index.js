import Axios from 'axios';

// Action Types

// Get all notifications

export const GET_NOTIFICATIONS_LOADING = 'GET_NOTIFICATIONS_LOADING';
export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';
export const GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS';
export const GET_NOTIFICATIONS_FAILURE = 'GET_NOTIFICATIONS_FAILURE';

//Action Creators

//Get all notifications
export const getNotificationsLoading = () =>{
  return{
    type: GET_NOTIFICATIONS_LOADING
  }
}
export const getNotifications = () => {
  const payload = Axios.get(`http://localhool:3001/notifications`);
  return {
    type: GET_NOTIFICATIONS,
    payload
  }
}
export const getNotificationsSuccess = (notifications) => {
  return {
    type: GET_NOTIFICATIONS_SUCCESS,
    notifications
  }
}
export const getNotificationsFailure = (error) => {
  return {
    type:  GET_NOTIFICATIONS_FAILURE,
    error
  }
}
