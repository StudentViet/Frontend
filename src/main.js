import Vue from 'vue'

import App from './App.vue'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import VueMoment from 'vue-moment'

import { router } from './routes'
import store from './store'

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

Vue.use(VueMoment)
Vue.use(Snotify, options)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
