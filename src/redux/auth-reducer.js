import {auth} from '../api/api';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_CAPTCHA = 'SET-CAPTCHA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captcha
            };
        default:
            return state;
    }
};

const setAuthUserData = (userId, login, email, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {userId, login, email, isAuth}
    };
};

const setCaptcha = (captcha) => ({
    type: SET_CAPTCHA,
    captcha
});

const getCaptcha = () => (dispatch) => {
    auth.security()
        .then(data => {
            dispatch(setCaptcha(data.url));
        });
};

export const getAuthData = () => async (dispatch) => {
    const data = await auth.authorize();
    if (data.resultCode === 0) {
        const {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
};

export const login = (values, setSubmitting, setStatus) => async (dispatch) => {
    const data = await auth.login(values);
    setSubmitting(false);
    if (data.resultCode === 0) {
        dispatch(getAuthData());
        dispatch(setCaptcha(null));
    } else if (data.resultCode === 1) {
        setStatus(data.messages.join(', '));
    } else if (data.resultCode === 10) {
        dispatch(getCaptcha());
    }
};

export const logout = () => async (dispatch) => {
    const data = await auth.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};