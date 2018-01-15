export const rootApi = process.env.NODE_ENV === 'production' 
? `https://dahab-backend.herokuapp.com` 
: `http://localhost:3001`;

// Users
export const userSignInAPi = `${rootApi}/users/login`;
export const currentUserApi = `${rootApi}/current_user`;
export const userApi = (id) => `${rootApi}/users/${id}`;
export const userRegisterApi = `${rootApi}/users/register`;

export const actionCableUrl = process.env.NODE_ENV === 'production'
? `wss://dahab-backend.herokuapp.com` 
: `ws://localhost:3001`;

// Admins
export const adminLoginApi = `${rootApi}/admins/login`;
export const currentAdminApi = `${rootApi}/current_admin`;

// Notifications
export const notificationsApi = `${rootApi}/notifications`;

// Pools
export const getPoolsApi = (status) => `${rootApi}/pools?status=${status}`;
export const poolApi = (id) => `${rootApi}/pools/${id}`;
export const addPoolApi = `${rootApi}/pools`;
export const userPoolApi = `${rootApi}/users_pools`;
export const deleteUserPoolApi = (id) => `${rootApi}/users_pools/${id}`;

// Requests
export const requestApi = `${rootApi}/requests`;
export const getRequestApi = (id) => `${rootApi}/requests/${id}`;
export const getRequestPoolApi = (pool_id) => `${rootApi}/requests/find_pool?pool_id=${pool_id}`;
