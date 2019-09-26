const bestSellersReducers = (state = {}, action) => {
  switch (action.type) {
    case "home/setBestSellers":
      return action.bestSellers;
    default:
      return state;
  }
};

export default bestSellersReducers;
