import axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '7a3cc96f-fd53-4723-9050-00fc6ce5c21f'
    }
});

export const auth = {
    authorize() {
        return instance
            .get(`auth/me`)
            .then(response => response.data);
    },
    login(loginData) {
        const {email, password, isRemembered, captcha = null} = loginData;
        return instance
            .post(`auth/login`, {
                email,
                password,
                rememberMe: isRemembered,
                captcha
            })
            .then(response => response.data);
    },
    logout() {
        return instance
            .delete(`auth/login`)
            .then(response => response.data);
    },
    security() {
        return instance
            .get(`security/get-captcha-url`)
            .then(response => response.data);
    }
};

export const profile = {
    getUserProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data);
    },

    getUserStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => response.data);
    },

    updateMyStatus(status) {
        return instance
            .put(`profile/status`, {status: status})
            .then(response => response.data);
    },

    updateProfilePhoto(profilePhoto) {
        const formData = new FormData();
        formData.append('image', profilePhoto);
        return instance
            .put(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => response.data)
    },
    updateProfileDescription(profileData) {
        return instance
            .put(`profile`, profileData)
            .then(response => response.data);
    }
};

export const users = {
    getCurrentUsersPage(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => response.data);
    },

    unfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data);
    }
};


