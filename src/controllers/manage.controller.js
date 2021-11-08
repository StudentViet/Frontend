import axios from 'axios';

const api = 'https://api.studentviet.edu.vn/api';

class ManageController {
    static createClass(name, data) {
        return axios.post(`${api}/classRoom/create`, `name=${name}&data=[${'"' + data.join('", "') + '"'}]`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
}

export default ManageController;
