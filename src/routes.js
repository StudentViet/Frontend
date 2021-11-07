import Vue from 'vue'
import VueRouter from 'vue-router'

/* Components */
import Login from './components/auth/Login.vue'

import Register from './components/auth/Register.vue'

import ForgotPassword from './components/auth/ForgotPassword.vue'

import Manage from './components/manage/Manage.vue'

import Exam from './components/manage/Exam.vue'

import Schedule from './components/manage/Schedule.vue'

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
                { path: '/quan-ly/bai-tap', component: Exam },
                { path: '/quan-ly/', component: Exam },
                { path: '/quan-ly/thoi-khoa-bieu', component: Schedule },
            ]
        },

        { path: '/dang-nhap', component: Login, name: 'login'},
        { path: '/dang-ky', component: Register, name: 'register'},
        { path: '/quen-mat-khau', component: ForgotPassword, name: 'forgotpassword'},
        { path: '*', component: PageNotFound, name: 'notfound' }
    ]
})
