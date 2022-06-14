<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Логин</label>
                        <input v-model="user.login" type="text" class="form-control">
                    </div>
                    <template v-if="!isLogin">
                        <div class="form-group">
                            <label>Почта</label>
                            <input v-model="user.email" type="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>ФИО</label>
                            <input v-model="user.fio" type="text" class="form-control">
                        </div>
                    </template>
                    <div class="form-group">
                        <label>Пароль</label>
                        <input v-model="user.password" type="password" class="form-control">
                    </div>
                    <div class="d-grid gap-2 mt-3">
                        <button data-bs-dismiss="modal" @click="tryToAuthorize()" class="btn btn-primary" type="button">{{ title }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "AuthorizationModal",
    data() {
        return {
            user: {
                login: "",
                email: "",
                password: "",
                fio: "",
                isAdmin: false
            },
        }
    },
    props: {
        isLogin: {
            type: Boolean,
            default: true
        }
    },
    created() {
        console.error(this.isLogin)
    },
    computed: {
      title() {
          return this.isLogin ? "Авторизация" : "Регистрация"
      }
    },
    methods: {
        async tryToAuthorize() {
            let route = this.isLogin ? 'login' : 'registration';
            await axios.post(`api/${route}`, {
                login: this.user.login,
                email: this.user.email,
                fio: this.user.fio,
                password: this.user.password
            }).then(resp => {
                localStorage.setItem("api_token", resp.data.access_token)
                this.$store.commit('ASSIGN');
                if(resp.data.isAdmin) {
                    this.$store.commit('MAKE_ADMIN');
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>

</style>
