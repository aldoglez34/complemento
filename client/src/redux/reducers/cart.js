const cartReducers = (state = { counter: 0, items: [] }, action) => {
  switch (action.type) {
    case "cart/addItem":
      // before adding the item, check if its already in state.items
      // if so, increment qty by 1
      let index = state.items.findIndex(i => i._id === action.data._id);
      // if found, index will have the index of the item in the array, if not it will have -1
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
        let tempState = state.items;
        tempState[index].qty = tempState[index].qty + 1;
        return {
          counter: state.counter + 1,
          items: tempState
        };
      }
    case "cart/clear":
      return {
        counter: 0,
        items: []
      };
    case "cart/decrementQty":
      let tempState2 = state.items;
      let index2 = state.items.findIndex(i => i._id === action.data);
      let quantity = tempState2[index2].qty;
      if (quantity > 1) {
        tempState2[index2].qty = quantity - 1;
        return {
          counter: state.counter - 1,
          items: tempState2
        };
      } else {
        tempState2.splice(index2, 1);
        return {
          counter: state.counter - 1,
          items: tempState2
        };
      }
    case "cart/deleteItem":
      let tempState3 = state.items;
      let index3 = state.items.findIndex(i => i._id === action.data);
      let quantity2 = tempState3[index3].qty;
      tempState3.splice(index3, 1);
      return {
        counter: state.counter - quantity2,
        items: tempState3
      };
    default:
      return state;
  }
};

export default cartReducers;
