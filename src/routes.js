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
                { path: '/quan-ly/bai-tap', component: Exercise, name: 'exam' },
                { path: '/quan-ly/', component: Exercise, name: 'exam' },
                { path: '/quan-ly/giao-vien', component: Setting, name: 'setting' },
                { path: '/quan-ly/giao-vien/lop-hoc/:id', component: Class, name: 'class' },
                { path: '/quan-ly/bai-tap/:id', component: GradeExercise, name: 'gradeExercise' },
                { path: '/quan-ly/thoi-khoa-bieu', component: Schedule, name: 'schedule' },
                { path: '/quan-ly/lam-bai-tap/:id', component: DoExercise, name: 'doExercise' },
            ]
        },

        { path: '/', component: Home, name: 'home'},
        { path: '/tham-gia-lop-hoc/:id', component: JoinClass, name: 'joinClass'},
        { path: '/dang-nhap', component: Login, name: 'login'},
        { path: '/dang-ky', component: Register, name: 'register'},
        { path: '/quen-mat-khau', component: ForgotPassword, name: 'forgotpassword'},
        { path: '/lay-lai-mat-khau/:token', component: ResetPassword, name: 'resetpassword'},
        { path: '*', component: PageNotFound, name: 'notfound' }
    ]
})
