const managerState = {
  manager: {},
  isManagerLogged: false
};

const managerReducers = (state = managerState, action) => {
  switch (action.type) {
    case "LOGIN_MANAGER":
      return [
        ...state,
        {
          manager: action.manager,
          isManagerLogged: true
        }
      ];
    case "LOGOUT_MANAGER":
      return [
        ...state,
        {
          manager: action.manager,
          isManagerLogged: false
        }
      ];
    default:
      return state;
  }
};

export default managerReducers;
