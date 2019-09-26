const sufferingsReducers = (state = {}, action) => {
  switch (action.type) {
    case "store/setSufferings":
      return action.sufferings;
    default:
      return state;
  }
};

export default sufferingsReducers;
