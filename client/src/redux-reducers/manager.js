// const managerInitState = {
//   isLogged: false,
//   email: null
// };

const managerReducers = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case "manager/login":
      return (
        // ...state,
        {
          isLogged: true,
          email: action.data
        }
      );
    case "manager/logout":
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
