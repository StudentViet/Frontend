import axios from 'axios';
const api = 'https://api.studentviet.edu.vn/api';

class ExerciseController {
    static getExercises() {
        return axios.get(`${api}/classRoom/exercise/list`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
    static getExercisesByIdClass(id) {
        return axios.get(`${api}/classRoom/exercise/list/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
}

export default ExerciseController;
