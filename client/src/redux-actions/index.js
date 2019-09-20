export const loginManager = data => {
  return {
    type: "LOGIN_MANAGER",
    data
  };
};

export const logoutManager = bool => {
  return {
    type: "LOGOUT_MANAGER",
    bool
  };
};

export const saveLoggedClient = client => {
  return {
    type: "SAVE_LOGGED_CLIENT",
    client
  };
};

export const deleteLoggedClient = client => {
  return {
    type: "DELETE_LOGGED_CLIENT",
    client
  };
};
