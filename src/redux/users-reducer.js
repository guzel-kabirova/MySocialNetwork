import {users} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_DISABLE = 'TOGGLE-IS-DISABLE';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    disabledUntilStopFetching: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    } else
                        return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    } else
                        return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_DISABLE:
            return {
                ...state,
                disabledUntilStopFetching: action.isFetching
                    ? [...state.disabledUntilStopFetching, action.userId]
                    : state.disabledUntilStopFetching.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
});
const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
});
const setUsers = (users) => ({
    type: SET_USERS,
    users
});
const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
});
const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
const toggleIsDisable = (userId, isFetching) => ({
    type: TOGGLE_IS_DISABLE,
    userId,
    isFetching
});

export const getAccessUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    const data = await users.getCurrentUsersPage(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
};

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleIsDisable(userId, true));
    const data = await users.follow(userId);
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleIsDisable(userId, false));
};

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleIsDisable(userId, true));
    const data = await users.unfollow(userId);
    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleIsDisable(userId, false));
};
