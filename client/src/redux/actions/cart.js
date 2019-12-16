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
