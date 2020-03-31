const clientReducers = (state = null, action) => {
  switch (action.type) {
    // ============================================
    // user
    case "user/client/login":
      return {
        _id: action.data._id,
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        phone: action.data.phone,
        email: action.data.email,
        address: action.data.address,
        favorites: action.data.favorites
      };
    case "user/client/updateFavorites":
      return {
        ...state,
        favorites: action.data
      };
    case "user/client/update":
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
    case "user/client/updateAfterPurchase":
      return {
        ...state,
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        phone: action.data.phone,
        address: {
          street: action.data.address.street,
          city: action.data.address.city,
          state: action.data.address.state,
          zipCode: action.data.address.zipCode,
          municipality: action.data.address.municipality,
          neighborhood: action.data.address.neighborhood
        }
      };
    // ============================================
    // manager
    case "user/manager/login":
      return {
        firebaseUID: action.data.firebaseUID,
        name: action.data.name,
        firstSurname: action.data.firstSurname,
        secondSurname: action.data.secondSurname,
        email: action.data.email
      };
    // ============================================
    // both
    case "user/logoutUser":
      return null;
    default:
      return state;
  }
};

export default clientReducers;
