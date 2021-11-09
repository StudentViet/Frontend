import axios from 'axios';

const api = 'https://api.studentviet.edu.vn/api';

class ManageController {
    static getClass() {
        return axios.get(`${api}/classRoom/list`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
    static createClass(name, data) {
        return axios.post(`${api}/classRoom/create`, `nameClass=${name}&data=[${'"' + data.join('", "') + '"'}]`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
}

export default ManageController;
