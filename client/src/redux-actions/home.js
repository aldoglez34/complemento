export const setPrioritized = discounts => {
  return {
    type: "home/setPrioritized",
    discounts
  };
};

export const setDiscounts = discounts => {
  return {
    type: "home/setDiscounts",
    discounts
  };
};

export const setBestSellers = bestSellers => {
  return {
    type: "home/setBestSellers",
    bestSellers
  };
};
