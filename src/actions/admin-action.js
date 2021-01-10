import { ActionTypes } from "../constants/admin-constants";

// select time slot action
const adminLoginAction = (loginAuth) => ({
  type: ActionTypes.LOGIN,
  payload: loginAuth,
});

const adminLogoutAction = (logout) => ({
  type: ActionTypes.LOGOUT,
  payload: logout,
});

export const setAdminLoginAction = (loginAuth) => adminLoginAction(loginAuth);
export const setAdminLogoutAction = (logout) => adminLogoutAction(logout);
