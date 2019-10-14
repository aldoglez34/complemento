const clientReducers = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case "client/login":
      return {
        isLogged: true,
        clientId: action.data.clientId,
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        phone: action.data.phone,
        email: action.data.email,
        street: action.data.street,
        city: action.data.city,
        state: action.data.state,
        zipCode: action.data.zipCode,
        comments: action.data.comments
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
