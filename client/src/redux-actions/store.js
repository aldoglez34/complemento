export const clearFilter = () => {
  return {
    type: "store/clearFilter"
  };
};

export const filterProducts = data => {
  return {
    type: "store/filterProducts",
    data
  };
};

export const sortByName = data => {
  return {
    type: "store/sortByName",
    data
  };
};

export const sortByPrice = data => {
  return {
    type: "store/sortByPrice",
    data
  };
};
