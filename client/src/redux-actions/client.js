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

export const updateFavorites = data => {
  return {
    type: "client/updateFavorites",
    data
  };
};

export const updateClient = data => {
  return {
    type: "client/update",
    data
  };
};
