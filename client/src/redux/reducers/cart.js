const cartReducers = (state = { counter: 0, items: [] }, action) => {
  // this function will recieve a productId and find the index in the items array
  // findIndex() returns -1 if the item wasn't found
  const findIndex = productId =>
    state.items.findIndex(i => i._id === productId);

  switch (action.type) {
    case "cart/addItem":
      // first check if the product is already in the cart
      // if it is, sum the qty
      // if it's not, add the item
      if (findIndex(action.data._id) === -1) {
        return {
          counter: state.counter + action.data.qty,
          items: state.items.concat({
            _id: action.data._id,
            qty: action.data.qty
          })
        };
      } else {
        return {
          counter: state.counter + action.data.qty,
          items: state.items.reduce((acc, cv, idx) => {
            if (findIndex(action.data._id) === idx) {
              acc.push({ ...cv, qty: cv.qty + action.data.qty });
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
    case "cart/adjustCart":
      // get both arrays
      const { zeroStock, notEnoughStock } = action.data;
      // delete all the items that have zero stock from the items array (if any)
      // and adjust the qty on all the items that don't have enough stock
      return {
        counter: state.items.reduce((acc, cv) => {
          // get indexes
          let zs = zeroStock.findIndex(
            i => i._id.toString() === cv._id.toString()
          );
          let nes = notEnoughStock.findIndex(
            i => i._id.toString() === cv._id.toString()
          );
          if (zs >= 0 && nes === -1) {
            // it's in zero stock only
            // substract qty (all of it because the item will be deleted)
            acc -= cv.qty;
          }
          if (zs === -1 && nes >= 0) {
            // it's in notenoughstock only so substract current stock to the qty
            acc -= cv.qty - notEnoughStock[nes].stock;
          }
          if (zs === -1 && nes === -1) {
            // item not in zeroStock and not in notEnoughStock
            // ignore it
          }
          return acc;
        }, state.counter),
        items: state.items.reduce((acc, cv) => {
          // get indexes
          let zs = zeroStock.findIndex(
            i => i._id.toString() === cv._id.toString()
          );
          let nes = notEnoughStock.findIndex(
            i => i._id.toString() === cv._id.toString()
          );
          if (zs >= 0 && nes === -1) {
            // it's in zero stock only so ignore it
          }
          if (zs === -1 && nes >= 0) {
            // it's in notenoughstock only so substract current stock to the qty
            acc.push({
              _id: cv._id,
              qty: notEnoughStock[nes].stock
            });
          }
          if (zs === -1 && nes === -1) {
            // item not in zeroStock and not in notEnoughStock so push it normally
            acc.push(cv);
          }
          return acc;
        }, [])
      };
    default:
      return state;
  }
};

export default cartReducers;
