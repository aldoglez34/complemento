const initState = {
  cat: null,
  suff: null,
  product: null
};

const breadcrumbReducers = (state = initState, action) => {
  let temp = state;

  switch (action.type) {
    case "breadcrumb/setCategory":
      temp.cat = action.cat;
      return temp;
    case "breadcrumb/setSuffering":
      temp.suff = action.suff;
      return temp;
    case "breadcrumb/setProduct":
      temp.product = action.product;
      return temp;
    default:
      return state;
  }
};

export default breadcrumbReducers;
