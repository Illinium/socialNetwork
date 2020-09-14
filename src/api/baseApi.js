import * as axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "17537096-8539-4806-a967-6017bdff365c"
    }
})

export const usersApi = {
    getUsers(currentPage, count) {
        return instance.get(`users?page=${currentPage}&count=${count}`)
    },
    onFollow (userId) {
        return instance.post(`follow/${userId}`)
    },
    onUnfollow (userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profilesApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}

export const authApi = {
    userAuth() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    logout() {
        return instance.delete('auth/login')
    }
}