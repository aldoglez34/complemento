export const setPrioritized = prioritized => {
  return {
    type: "home/setPrioritized",
    prioritized
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
