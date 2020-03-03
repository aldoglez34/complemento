const cartReducers = (state = { counter: 0, items: [] }, action) => {
  // this function will recieve a productId and find the index in the items array
  const findIndex = productId => {
    return state.items.findIndex(i => i._id === productId);
  };
  //
  switch (action.type) {
    case "cart/addItem":
      if (findIndex(action.data._id) === -1) {
        // if not found, concat the item like so
        return {
          counter: state.counter + 1,
          items: state.items.concat({
            _id: action.data._id,
            qty: 1
          })
        };
      } else {
        // if it is, then sum qty + 1 in that position
        return {
          counter: state.counter + 1,
          items: state.items.reduce((acc, cv, idx) => {
            if (findIndex(action.data._id) === idx) {
              acc.push({ ...cv, qty: cv.qty + 1 });
            } else {
              acc.push(cv);
            }
            return acc;
          }, [])
        };
      }
    case "cart/clear":
      return {
        counter: 0,
        items: []
      };
    case "cart/decrementQty":
      // if qty of that item is greater than 1, decrease it by 1
      if (state.items[findIndex(action.data)].qty > 1) {
        return {
          counter: state.counter - 1,
          items: state.items.reduce((acc, cv, idx) => {
            if (findIndex(action.data) === idx) {
              acc.push({ ...cv, qty: cv.qty - 1 });
            } else {
              acc.push(cv);
            }
            return acc;
          }, [])
        };
      }
      // if its 1 then delete (splice) the item from the array entirely
      // (there can't be items with qty = 0)
      else {
        return {
          counter: state.counter - 1,
          items: state.items.reduce((acc, cv, idx) => {
            if (findIndex(action.data) !== idx) acc.push(cv);
            return acc;
          }, [])
        };
      }
    case "cart/deleteItem":
      return {
        counter: state.counter - state.items[findIndex(action.data)].qty,
        items: state.items.reduce((acc, cv, idx) => {
          if (findIndex(action.data) !== idx) acc.push(cv);
          return acc;
        }, [])
      };
    default:
      return state;
  }
};

export default cartReducers;
