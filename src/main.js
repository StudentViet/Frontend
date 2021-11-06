import Vue from 'vue'

import App from './App.vue'
import Snotify from 'vue-snotify'

import { router } from './routes'

import 'vue-snotify/styles/material.css'

Vue.config.productionTip = false

Vue.use(Snotify, {
    toast: {
        timeout: 2500
    },
    showProgressBar: true,
    closeOnClick: false
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
