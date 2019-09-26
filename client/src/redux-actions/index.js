// breadcrumb actions

export const setCategory = cat => {
  return {
    type: "breadcrumb/setCategory",
    cat
  };
};

export const setSuffering = suff => {
  return {
    type: "breadcrumb/setSuffering",
    suff
  };
};

export const setProduct = product => {
  return {
    type: "breadcrumb/setProduct",
    product
  };
};

// manager actions

export const loginManager = data => {
  return {
    type: "manager/ogin",
    data
  };
};

export const logoutManager = () => {
  return {
    type: "manager/logout"
  };
};

// client actions

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
