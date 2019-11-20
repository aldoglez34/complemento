export const loginManager = data => {
  return {
    type: "manager/login",
    data
  };
};

export const logoutManager = () => {
  return {
    type: "manager/logout"
  };
};

export const setActive = data => {
  return {
    type: "manager/setActive",
    data
  };
};
