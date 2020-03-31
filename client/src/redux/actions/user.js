// ==========================================================
// client
export const loginClient = data => {
  return {
    type: "client/login",
    data
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

export const updateAfterPurchase = data => {
  return {
    type: "client/updateAfterPurchase",
    data
  };
};

// ==========================================================
// manager

export const loginManager = data => {
  return {
    type: "manager/login",
    data
  };
};

// ==========================================================
// both

export const logoutUser = () => {
  return {
    type: "client/logoutUser"
  };
};
