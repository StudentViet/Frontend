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
        const formData = (data[0] != "" && data.length) ? (`nameClass=${name}&data=[${'"' + data.join('", "') + '"'}]`) : (`nameClass=${name}&data=[]`);
        return axios.post(`${api}/classRoom/create`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
    static deleteClass(id) {
        return axios.get(`${api}/classRoom/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
}

export default ManageController;
