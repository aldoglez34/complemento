export const loginClient = data => {
  return {
    type: "client/login",
    data
  };
};

export const logoutClient = () => {
  return {
    type: "client/logout"
  };
};

export const updateClient = () => {
  return {
    type: "client/update"
  };
};
