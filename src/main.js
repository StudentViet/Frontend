import Vue from 'vue'

import App from './App.vue'
import Snotify, { SnotifyPosition } from 'vue-snotify'

import { router } from './routes'

import 'vue-snotify/styles/material.css'

Vue.config.productionTip = false

const options = {
    toast: {
        timeout: 2500,
        position: SnotifyPosition.rightTop
    },
    showProgressBar: true,
    closeOnClick: false
}

Vue.use(Snotify, options)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
