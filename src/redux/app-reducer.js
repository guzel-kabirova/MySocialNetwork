import {getAuthData} from './auth-reducer';

const TOGGLE_IS_INITIALIZED = 'TOGGLE-IS-INITIALIZED';

const initialState = {
    isInitialized: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_INITIALIZED:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state;
    }
};

const toggleIsInitialized = () => ({
    type: TOGGLE_IS_INITIALIZED
});

export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuthData());
    dispatch(toggleIsInitialized());
};