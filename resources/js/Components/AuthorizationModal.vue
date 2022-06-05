<template>
<!--    &lt;!&ndash; Modal &ndash;&gt;-->
<!--    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">-->
<!--        <div class="modal-dialog">-->
<!--            <div class="modal-content">-->
<!--                <div class="modal-header">-->
<!--                    <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>-->
<!--                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
<!--                        <span aria-hidden="true">&times;</span>-->
<!--                    </button>-->
<!--                </div>-->
<!--                <div class="modal-body">-->
<!--                    <form>-->
<!--                        <div class="form-group">-->
<!--                            <label>Логин</label>-->
<!--                            <input v-model="user.login" type="text" class="form-control">-->
<!--                        </div>-->
<!--                        <div v-if="!isLogin" class="form-group">-->
<!--                            <label>Почта</label>-->
<!--                            <input v-model="user.email" type="email" class="form-control">-->
<!--                        </div>-->
<!--                        <div class="form-group">-->
<!--                            <label>Пароль</label>-->
<!--                            <input v-model="user.password" type="password" class="form-control">-->
<!--                        </div>-->
<!--                        <div class="form-group form-check">-->
<!--                            <input type="checkbox" class="form-check-input">-->
<!--                            <label class="form-check-label">Войти как администратор</label>-->
<!--                        </div>-->
<!--                        <button type="button" @click="tryToAuthorize()" class="btn btn-primary btn-lg btn-block">{{ title }}</button>-->
<!--                    </form>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
    <!-- Modal -->
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
                        <div v-if="!isLogin" class="form-group">
                            <label>Почта</label>
                            <input v-model="user.email" type="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Пароль</label>
                            <input v-model="user.password" type="password" class="form-control">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input">
                            <label class="form-check-label">Войти как администратор</label>
                        </div>
                        <div class="d-grid gap-2">
                            <button @click="tryToAuthorize()" class="btn btn-primary" type="button">{{ title }}</button>
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
