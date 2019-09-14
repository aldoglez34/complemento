const clientReducers = (state = [], action) => {

    switch (action.type) {
        case "SAVE_LOGGED_CLIENT":
            return [
                ...state,
                {
                    loggedClient: action.client
                }
            ]
        case "DELETE_LOGGED_CLIENT":
            return [
                ...state,
                {
                    loggedClient: action.client
                }
            ]
        default:
            return state
    };

};

export default clientReducers;
