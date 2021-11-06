import Vue from 'vue'
import VueRouter from 'vue-router'

/* Components */
import Login from './components/auth/Login.vue'

import Register from './components/auth/Register.vue'

import ForgotPassword from './components/auth/ForgotPassword.vue'

// import Home from './components/Home.vue'

// import PageNotFound from './components/404.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        // { path: '/', component: Home, name: 'home'},
        { path: '/login', component: Login, name: 'login'},
        { path: '/register', component: Register, name: 'register'},
        { path: '/forgotpassword', component: ForgotPassword, name: 'forgotpassword'},
    ]
})
