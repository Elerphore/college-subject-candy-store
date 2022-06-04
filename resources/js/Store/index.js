import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        apiKey: "",
        isAuthorized: false
    },
    mutations: {
        INCREMENT(state) {
            state.count++
        },
        ASSIGN(state) {
            state.apiKey = localStorage.getItem("api_key")
            state.isAuthorized = true
        }
    },
    actions: {}
})

export default store;
