import Vue from 'vue';
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const defaultState = () => {
    return {
        apiKey: "",
        isAuthorized: false,
        isAdmin: false
    }
}

const store = new Vuex.Store({
    state: {
        apiKey: "",
        isAuthorized: false,
        isAdmin: false
    },
    mutations: {
        INCREMENT(state) {
            state.count++
        },
        ASSIGN(state) {
            state.apiKey = localStorage.getItem("api_token")
            state.isAuthorized = true
        },
        MAKE_ADMIN(state) {
            state.isAdmin = true;
        },
        clearStore(state){
            Object.assign(state, defaultState())
        },
    },
    actions: {},
    plugins: [createPersistedState()]
})

export default store;
