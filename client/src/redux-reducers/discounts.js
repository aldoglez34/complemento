const discountsReducers = (state = {}, action) => {
  switch (action.type) {
    case "discounts/setDiscounts":
      return action.discounts;
    default:
      return state;
  }
};

export default discountsReducers;
