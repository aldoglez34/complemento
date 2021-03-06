export const addItem = data => {
  return {
    type: "cart/addItem",
    data
  };
};

export const clear = () => {
  return {
    type: "cart/clear"
  };
};

export const decrementQty = data => {
  return {
    type: "cart/decrementQty",
    data
  };
};

export const deleteItem = data => {
  return {
    type: "cart/deleteItem",
    data
  };
};

export const adjustCart = data => {
  return {
    type: "cart/adjustCart",
    data
  };
};
