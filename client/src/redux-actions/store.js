// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// STORE actions

export const setCategories = categories => {
  return {
    type: "store/setCategories",
    categories
  };
};

export const setSufferings = sufferings => {
  return {
    type: "store/setSufferings",
    sufferings
  };
};

export const setProducts = products => {
  return {
    type: "store/setProducts",
    products
  };
};

export const setProductCounter = counter => {
  return {
    type: "store/setProductCounter",
    counter
  };
};
