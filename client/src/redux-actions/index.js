// my actions for redux

export const saveProducts = productList => {
    return {
        type: "SAVE_PRODUCTS",
        productList
    };
};