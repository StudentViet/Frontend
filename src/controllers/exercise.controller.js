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

    static addExercise(idClasses, nameExercise, file, expires_at) {
        let formData = new FormData();

        formData.append("file", file);
        formData.append("nameExercise", nameExercise);
        formData.append("expires_at", expires_at);
        formData.append("idClass", idClasses);

        return axios.post(`${api}/classRoom/exercise/create`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }

    static downloadExercise(file_name) {
        return axios.get(`${api}/classRoom/exercise/downloadFile/${file_name}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }

    static removeExercise(id) {
        return axios.get(`${api}/classRoom/exercise/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }

    static submitExercise(file, idExam) {
        let formData = new FormData();

        formData.append("file", file);
        formData.append("idExam", idExam);

        return axios.post(`${api}/classRoom/exercise/sendExercise`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }

    static uploadFile(file, idExam) {
        let formData = new FormData();

        formData.append("file", file);
        formData.append("idExam", idExam);

        return axios.post(`${api}/classRoom/exercise/file/upload`, formData, {
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
