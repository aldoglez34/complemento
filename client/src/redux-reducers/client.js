const clientReducers = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case "client/login":
      return {
        isLogged: true,
        _id: action.data._id,
        firebaseUID: action.data.firebaseUID,
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        phone: action.data.phone,
        email: action.data.email,
        address: action.data.address
      };
    case "client/update":
      return {
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        phone: action.data.phone,
        street: action.data.street,
        city: action.data.city,
        state: action.data.state,
        zipCode: action.data.zipCode
      };
    case "client/logout":
      return {
        isLogged: false
      };
    default:
      return state;
  }
};

export default clientReducers;
