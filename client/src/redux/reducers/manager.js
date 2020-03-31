const managerReducers = (state = null, action) => {
  switch (action.type) {
    case "manager/login":
      return {
        firebaseUID: action.data.firebaseUID,
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        email: action.data.email
      };
    case "manager/logout":
      return null;
    default:
      return state;
  }
};

export default managerReducers;
