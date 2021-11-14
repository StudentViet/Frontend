import Vue from 'vue'
import VueRouter from 'vue-router'

/* Components */
import Home from './components/Home.vue'

import Login from './components/auth/Login.vue'

import Register from './components/auth/Register.vue'

import ForgotPassword from './components/auth/ForgotPassword.vue'

import ResetPassword from './components/auth/ResetPassword.vue'

import Manage from './components/manage/Manage.vue'

import Exercise from './components/manage/Exercise.vue'

import DoExercise from './components/manage/DoExercise.vue'

import GradeExercise from './components/manage/GradeExercise.vue'

import Setting from './components/manage/Setting.vue'

import Class from './components/manage/Class.vue'

import Schedule from './components/manage/Schedule.vue'

import JoinClass from './components/JoinClass.vue'

import PageNotFound from './components/404.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/quan-ly',
            component: Manage,
            name: 'manage',
            children: [
                { path: '/quan-ly/bai-tap', component: Exercise, name: 'exam', meta: { title: 'Bài tập' } },
                { path: '/quan-ly/', component: Exercise, name: 'exam', meta: { title: 'Bài tập' } },
                { path: '/quan-ly/giao-vien', component: Setting, name: 'setting', meta: { title: 'Quản lý' } },
                { path: '/quan-ly/giao-vien/lop-hoc/:id', component: Class, name: 'class', meta: { title: 'Quản lý lớp học' } },
                { path: '/quan-ly/bai-tap/:id', component: GradeExercise, name: 'gradeExercise', meta: { title: 'Bài làm học sinh' } },
                { path: '/quan-ly/thoi-khoa-bieu', component: Schedule, name: 'schedule', meta: { title: 'Thời khóa biểu' } },
                { path: '/quan-ly/lam-bai-tap/:id', component: DoExercise, name: 'doExercise', meta: { title: 'Làm bài tập' } },
            ]
        },

        { path: '/', component: Home, name: 'home', meta: { title: 'Trang chủ' }},
        { path: '/tham-gia-lop-hoc/:id', component: JoinClass, name: 'joinClass', meta: { title: 'Tham gia lớp học' }},
        { path: '/dang-nhap', component: Login, name: 'login', meta: { title: 'Đăng nhập' }},
        { path: '/dang-ky', component: Register, name: 'register', meta: { title: 'Đăng ký' }},
        { path: '/quen-mat-khau', component: ForgotPassword, name: 'forgotpassword', meta: { title: 'Quên mật khẩu' }},
        { path: '/lay-lai-mat-khau/:token', component: ResetPassword, name: 'resetpassword', meta: { title: 'Đổi lại mật khẩu' }},
        { path: '*', component: PageNotFound, name: 'notfound', meta: { title: 'Không tìm thấy trang' } }
    ]
})
