const bestSellersReducers = (state = {}, action) => {
  switch (action.type) {
    case "bestSellers/setBestSellers":
      return action.bestSellers;
    default:
      return state;
  }
};

export default bestSellersReducers;
