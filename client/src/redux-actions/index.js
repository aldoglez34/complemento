export const loginManager = data => {
  return {
    type: "LOGIN_MANAGER",
    data
  };
};

export const logoutManager = () => {
  return {
    type: "LOGOUT_MANAGER"
  };
};

export const loginClient = data => {
  return {
    type: "LOGIN_CLIENT",
    data
  };
};

export const logoutClient = () => {
  return {
    type: "LOGOUT_CLIENT"
  };
};
