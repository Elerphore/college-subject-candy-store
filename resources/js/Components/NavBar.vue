<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <router-link to="/" tag="button" class="btn btn-outline-success me-2">Главная</router-link>
                <button v-if="!isAuthorized" @click="changeState(false)" class="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Регистрация</button>
                <button v-if="!isAuthorized" @click="changeState(true)" class="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Авторизация</button>
                <router-link v-if="isAuthorized" to="/admin" tag="button" class="btn btn-outline-success me-2">Админ панель</router-link>
                <router-link v-if="isAuthorized" to="/account" tag="button" class="btn btn-outline-success me-2">Кабинет</router-link>
                <router-link v-if="isAuthorized" to="/bin" tag="button" class="btn btn-outline-success me-2">Корзина</router-link>
                <button @click="logout()" v-if="isAuthorized" class="btn btn-outline-success me-2">Выход</button>
            </div>
        </div>
        <authorization-modal :is-login="isLogin"></authorization-modal>
    </nav>
</template>

<script>
import AuthorizationModal from "../Components/AuthorizationModal";
import { mapState } from 'vuex';

export default {
    name: "NavBar",
    data() {
        return {
            isLogin: true
        }
    },
    components: { AuthorizationModal },
    methods: {
        changeState(state) {
            this.isLogin = state
        },
        async logout() {
            localStorage.clear();
            this.$store.commit("clearStore")
        }
    },
    computed: {
        ...mapState({
            isAuthorized: state => state.isAuthorized
        }),
    }
}
</script>

<style scoped>

</style>
