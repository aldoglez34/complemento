const storeReducers = (
  state = {
    filter: null,
    nameSorting: "Ascendente",
    priceSorting: "Sin orden"
  },
  action
) => {
  switch (action.type) {
    case "store/clearFilter":
      return {
        ...state,
        filter: null,
        nameSorting: "Ascendente",
        priceSorting: "Sin orden"
      };
    case "store/filterProducts":
      return {
        ...state,
        filter: action.data
      };
    case "store/sortByName":
      return {
        ...state,
        nameSorting: action.data
      };
    case "store/sortByPrice":
      return {
        ...state,
        priceSorting: action.data
      };
    default:
      return state;
  }
};

export default storeReducers;
