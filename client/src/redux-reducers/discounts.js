const discountsReducers = (state = {}, action) => {
  switch (action.type) {
    case "home/setDiscounts":
      return action.discounts;
    default:
      return state;
  }
};

export default discountsReducers;
