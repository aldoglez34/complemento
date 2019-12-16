const cartReducers = (state = { counter: 0, items: [] }, action) => {
  switch (action.type) {
    case "cart/addItem":
      let c = state.counter;
      return {
        counter: c + 1,
        items: state.items.concat(action.data)
      };
    case "cart/clear":
      return {
        counter: 0,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducers;
