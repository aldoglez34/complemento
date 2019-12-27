const cartReducers = (state = { counter: 0, items: [] }, action) => {
  switch (action.type) {
    case "cart/addItem":
      // before adding the item, check if its already in state.items
      // if so, increment qty by 1
      let index = state.items.findIndex(i => i._id === action.data._id);
      if (index === -1) {
        return {
          counter: state.counter + 1,
          items: state.items.concat({
            _id: action.data._id,
            name: action.data.name,
            qty: 1
          })
        };
      } else {
        let tempArr = state.items;
        tempArr[index].qty = tempArr[index].qty + 1;
        return {
          counter: state.counter + 1,
          items: tempArr
        };
      }
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
