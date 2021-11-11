import axios from 'axios';
const api = 'https://api.studentviet.edu.vn/api';

class ClassController {
    static joinClass(id) {
        return axios.get(`${api}/classRoom/join/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
    static getClass(id) {
        return axios.get(`${api}/classRoom/show/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
    static addStudent(email, idClass) {
        return axios.post(`${api}/classRoom/add`, `idClass=${idClass}&email=${email}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
    static removeStudent(email, idClass) {
        return axios.post(`${api}/classRoom/kick`, `idClass=${idClass}&email=${email}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
}

export default ClassController;
