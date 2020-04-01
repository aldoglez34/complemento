// ==========================================================
// client
export const loginClient = data => {
  return {
    type: "user/client/login",
    data
  };
};

export const updateFavorites = data => {
  return {
    type: "user/client/updateFavorites",
    data
  };
};

export const updateClient = data => {
  return {
    type: "user/client/update",
    data
  };
};

export const updateAfterPurchase = data => {
  return {
    type: "user/client/updateAfterPurchase",
    data
  };
};

// ==========================================================
// manager

export const loginManager = data => {
  return {
    type: "user/manager/login",
    data
  };
};

// ==========================================================
// both

export const logoutUser = () => {
  return {
    type: "user/logoutUser"
  };
};
