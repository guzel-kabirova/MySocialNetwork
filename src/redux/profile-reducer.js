import {profile} from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
    posts: [
        {
            name: 'Короткова Елизавета',
            date: '15.08.2021 15:00',
            postText: 'Привет, Гузель! Клево, что ты тоже зарегалась в этой сетке',
            likeCount: 5,
            comment: 7,
            id: 1
        },
        {
            name: 'Федорова Диана',
            date: '14.08.2021 18:50',
            postText: 'Мой первый постик! Гавтвуйте',
            likeCount: 9,
            comment: 12,
            id: 2
        }
    ],
    profile: null,
    status: ''
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost =
                {
                    name: 'Кабирова Гузель',
                    date: '16.08.2021 15:00',
                    postText: action.newPostText,
                    likeCount: 0,
                    comment: 0,
                    id: 3
                };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({
    type: ADD_POST,
    newPostText
});

const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile
});

const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profile.getUserProfile(userId);
    dispatch(setProfile(data));
};

export const getUserStatus = (userId) => async (dispatch) => {
    const data = await profile.getUserStatus(userId);
    dispatch(setStatus(data));
};

export const updateMyStatus = (status) => async (dispatch) => {
    const data = await profile.updateMyStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

