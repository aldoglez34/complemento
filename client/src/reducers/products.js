
const productsReducer = (state = 10, action) => {

    switch (action.type) {

        case "ADD_PRODUCTS":
            return state - 1;

        default:
            return state;

    };

};

export default productsReducer;
