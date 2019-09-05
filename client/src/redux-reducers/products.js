
const productsReducer = (state = 10, action) => {

    switch (action.type) {

        case "SAVE_PRODUCTS":
            return Object.assign({}, state, {
                products: [
                    ...state.products,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        default:
            return state;

    };

};

export default productsReducer;
