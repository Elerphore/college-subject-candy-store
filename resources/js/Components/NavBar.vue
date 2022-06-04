<template>
<!--    <nav class="navbar navbar-expand-lg navbar-light bg-light">-->
<!--        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--            <span class="navbar-toggler-icon"></span>-->
<!--        </button>-->

<!--        <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--            <ul class="navbar-nav mr-auto">-->
<!--                <li class="nav-item active">-->
<!--                    <a class="nav-link" href="#">Candy Store <span class="sr-only">(current)</span></a>-->
<!--                </li>-->
<!--            </ul>-->
<!--            <button @click="changeState(false)" class="btn btn-outline-success ml-2" data-toggle="modal" data-target="#exampleModal">Регистрация</button>-->
<!--            <button @click="changeState(true)" class="btn btn-outline-success ml-2" data-toggle="modal" data-target="#exampleModal">Авторизация</button>-->
<!--            <button class="btn btn-outline-success ml-2">Админ панель</button>-->
<!--            <button class="btn btn-outline-success ml-2">Кабинет</button>-->
<!--        </div>-->
<!--        <authorization-modal :is-login="isLogin"></authorization-modal>-->
<!--    </nav>-->

    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li>
                </ul>
<!--                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">-->
<!--                    <button class="btn btn-outline-success" type="submit">Search</button>-->
                    <button @click="changeState(false)" class="btn btn-outline-success ml-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Регистрация</button>
                    <button @click="changeState(true)" class="btn btn-outline-success ml-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Авторизация</button>
                    <button class="btn btn-outline-success ml-2">Админ панель</button>
                    <button class="btn btn-outline-success ml-2">Кабинет</button>
            </div>
        </div>
        <authorization-modal :is-login="isLogin"></authorization-modal>
    </nav>
</template>

<script>
import AuthorizationModal from "../Components/AuthorizationModal";
export default {
    name: "NavBar",
    data() {
        return {
            isLogin: true
        }
    },
    components: {AuthorizationModal},
    methods: {
        changeState(state) {
            this.isLogin = state
        }
    }
}
</script>

<style scoped>

</style>
