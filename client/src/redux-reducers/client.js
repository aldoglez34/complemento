// const clientInitState = {
//   isLogged: false,
//   uid: null,
//   name: null,
//   firstSurname: null,
//   secondSurname: null,
//   phone: null,
//   email: null,
//   street: null,
//   city: null,
//   state: null,
//   zipCode: null,
//   comments: null
// };

const clientReducers = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case "client/login":
      return (
        // ...state,
        {
          isLogged: true,
          uid: action.data.uid,
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
        }
      );
    case "client/logout":
      return (
        // ...state,
        {
          isLogged: false,
          uid: null,
          name: null,
          firstSurname: null,
          secondSurname: null,
          phone: null,
          email: null,
          street: null,
          city: null,
          state: null,
          zipCode: null,
          comments: null
        }
      );
    default:
      return state;
  }
};

export default clientReducers;
