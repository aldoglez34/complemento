export const saveLoggedClient = client => {
    return {
        type: "SAVE_LOGGED_CLIENT",
        client
    };
};

export const deleteLoggedClient = client => {
    return {
        type: "DELETE_LOGGED_CLIENT",
        client
    };
};