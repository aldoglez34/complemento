const clientReducers = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case "client/login":
      return {
        isLogged: true,
        _id: action.data._id,
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        phone: action.data.phone,
        email: action.data.email,
        address: action.data.address,
        favorites: action.data.favorites
      };
    case "client/updateFavorites":
      return {
        ...state,
        favorites: action.data
      };
    case "client/update":
      return {
        ...state,
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        phone: action.data.phone,
        address: {
          street: action.data.street,
          city: action.data.city,
          state: action.data.state,
          zipCode: action.data.zipCode,
          municipality: action.data.municipality,
          neighborhood: action.data.neighborhood
        }
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
