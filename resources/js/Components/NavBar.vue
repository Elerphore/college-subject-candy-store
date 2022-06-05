<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" tag="button" class="btn btn-outline-primary me-2">Главная</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="(isAuthorized && isAdmin)" to="/admin" tag="button" class="btn btn-outline-success me-2">Админ панель</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="isAuthorized" to="/account" tag="button" class="btn btn-outline-success me-2">Кабинет</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="isAuthorized" to="/bin" tag="button" class="btn btn-outline-success me-2">Корзина</router-link>
                    </li>
                </ul>

                <button v-if="!isAuthorized" @click="changeState(false)" class="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Регистрация</button>
                <button v-if="!isAuthorized" @click="changeState(true)" class="btn btn-outline-success me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Авторизация</button>
                <button @click="logout()" v-if="isAuthorized" class="btn btn-danger me-2">Выход</button>
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
            await this.$router.push('/')
        }
    },
    computed: {
        ...mapState({
            isAuthorized: state => state.isAuthorized,
            isAdmin: state => state.isAdmin
        }),
    }
}
</script>

<style scoped>

</style>
