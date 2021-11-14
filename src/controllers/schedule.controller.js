import axios from 'axios';

const api = 'https://api.studentviet.edu.vn/api';

class ScheduleController {
    static addSchedule(idClass, day, period, subject, time, link) {
        const formData = {
            idClass,
            period,
            subject,
            time,
            link,
            day
        }

        return axios.post(`${api}/classRoom/schedule/create`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }
}

export default ScheduleController;
