import Vue from 'vue';
import Vuex from 'vuex';
import modules from "@/helpers/registerStoreModules";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        error: null
    },
    getters: {
        error(state) {
            return state.error;
        }
    },
    mutations: {
        setError(state, error) {
            state.error = error;
        }
    },
    modules
});

export default store;