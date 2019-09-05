// reducers

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case "SAVE_PRODUCTS":
            return [
                ...state,
                {
                    productList: action.productList
                }
            ]
        default:
            return state;
    };
};

export default productsReducer;
