const prioritizedReducers = (state = {}, action) => {
  switch (action.type) {
    case "home/setPrioritized":
      return action.prioritized;
    default:
      return state;
  }
};

export default prioritizedReducers;
