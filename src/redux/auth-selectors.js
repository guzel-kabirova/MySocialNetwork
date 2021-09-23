export const getLogin = (state) => {
    return state.auth.login;
};
export const getIsAuth = (state) => {
    return state.auth.isAuth;
};

export const getCaptcha = (state) => {
    return state.auth.captcha;
};
export const getAuthUserId = (state) => {
    return state.auth.userId;
};
