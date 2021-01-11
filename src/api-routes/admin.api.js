let system_env =
  "https://ik2birnfgd.execute-api.ap-southeast-1.amazonaws.com/dev";

export const ADMIN_API = {
  LOGIN: `http://${system_env}/admin-api/login`,
  LOGOUT: `http://${system_env}/admin-api/logout`,
};
