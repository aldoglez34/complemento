export const saveLoggedClient = client => {
    return {
        type: "SAVE_LOGGED_CLIENT",
        client
    };
};