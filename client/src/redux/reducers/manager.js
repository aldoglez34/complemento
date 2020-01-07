const managerReducers = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case "manager/login":
      return {
        isLogged: true,
        firebaseUID: action.data.firebaseUID,
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        email: action.data.email
      };
    case "manager/logout":
      return {
        isLogged: false
      };
    default:
      return state;
  }
};

export default managerReducers;
