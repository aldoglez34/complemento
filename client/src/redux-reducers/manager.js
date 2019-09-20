const managerInitState = {
  isLogged: false,
  email: null
};

const managerReducers = (state = [], action) => {
  switch (action.type) {
    case "LOGIN_MANAGER":
      return (
        // ...state,
        {
          isLogged: true,
          email: action.data
        }
      );
    case "LOGOUT_MANAGER":
      return (
        // ...state,
        {
          isLogged: false,
          email: null
        }
      );
    default:
      return state;
  }
};

export default managerReducers;
