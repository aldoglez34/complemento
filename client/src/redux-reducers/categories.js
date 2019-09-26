const categoriesReducers = (state = {}, action) => {
  switch (action.type) {
    case "store/setCategories":
      return action.categories;
    default:
      return state;
  }
};

export default categoriesReducers;
