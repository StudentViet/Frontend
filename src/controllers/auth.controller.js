import axios from 'axios';

const api = 'https://api.studentviet.edu.vn/api/auth';

class AuthController {
    static login(email, password) {
        return axios.post(`${api}/login`, {
            email,
            password,
        });
    }

    static register(name, email, phone, password, password_confirmation, schoolName, schoolClass, birthday, role) {
        return axios.post(`${api}/register`, {
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
