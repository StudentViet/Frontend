import axios from 'axios';

const api = 'https://api.studentviet.edu.vn/api';

class AuthController {
    static ResetPassword(token, password, password_confirmation) {
        return axios.post(`${api}/auth/reset-password`, {
            token,
            password,
            password_confirmation,
        });
    }

    static checkTokenForgot(token) {
        return axios.get(`${api}/auth/check-token/${token}`);
    }

    static getUser() {
        return axios.get(`${api}/user`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }

    static logout() {
        return axios.get(`${api}/logout`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }

    static forgot(email) {
        return axios.post(`${api}/auth/forgot`, {
            email
        });
    }

    static login(user, password) {
        return axios.post(`${api}/auth/login`, {
            user,
            password,
        });
    }

    static register(name, email, phone, password, password_confirmation, schoolName, schoolClass, birthday, role) {
        return axios.post(`${api}/auth/register`, {
            name,
            email,
            phone,
            password,
            password_confirmation,
            schoolName,
            schoolClass,
            birthday,
            role
        });
    }
}

export default AuthController;
