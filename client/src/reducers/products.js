
const productsReducer = (state = null, action) => {

    switch (action.type) {

        case "ADD_PRODUCTS":
            return action.payload;

        default:
            return state;

    };

};

export default productsReducer;
