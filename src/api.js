export const rootApi = `http://localhost:3001`;

// // Users
// export const usersApi = `${rootApi}/users`;
// export const userApi = (id) => `${usersApi}?id.value=${id}`;

// pools
export const poolsApi = `${rootApi}/pools`;
export const editPoolApi = (id) => `${poolsApi}/${id}`;
export const PoolApi = (id) => `${poolsApi}/${id}`;
