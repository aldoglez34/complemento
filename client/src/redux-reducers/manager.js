const managerReducers = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case "manager/login":
      return {
        isLogged: true,
        email: action.data
      };
    case "manager/logout":
      return {
        isLogged: false
      };
    case "manager/setActive":
      return {
        ...state,
        active: action.data
      };
    default:
      return state;
  }
};

export default managerReducers;
