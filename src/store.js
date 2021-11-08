import Vuex from 'vuex';
import Vue from 'vue';

import AuthController from '@/controllers/auth.controller'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: null
    },
    getters: {
        user: state => {
            return state.user;
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        async getUser({ commit }) {
            try {
                if (localStorage.getItem('accessToken') == '') return;
                var response = await AuthController.getUser();
            } catch (err) {
                localStorage.setItem('accessToken', '');
                commit('setUser', null);
            }

            commit('setUser', response.data.data.user);

            return response.data.data.user;
        },
    }
})
