import Vuex from 'vuex';
import Vue from 'vue';

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
        updateUser(context, user) {
            context.commit('setUser', user);
        }
    }
})
