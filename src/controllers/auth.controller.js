import axios from 'axios';

const api = 'https://api.studentviet.edu.vn/api/auth';

class AuthController {
    // static login(email, password) {
    //
    // }

    static register(fullname, schoolName, schoolClass, birthday, phone, role, password, confirmPassword) {
        return axios.post(`${api}/register`, {
            fullname,
            schoolName,
            schoolClass,
            birthday,
            phone,
            role,
            password,
            confirmPassword
        });
    }
}

export default AuthController;
