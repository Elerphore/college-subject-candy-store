<template>
    <div class="adminPanel">
        <table class="table table-bordered mb-5">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Цена</th>
                <th scope="col">Изображение</th>
            </tr>
            </thead>
            <tbody v-for="(item, index) in products" :key="index">
            <tr>
                <th scope="row">{{ index }}</th>
                <td>{{ item.name }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.image }}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-primary">Сохранить изменения</button>
                    <button type="button" class="btn btn-sm btn-danger">Удалить</button>
                </td>
            </tr>
            </tbody>
        </table>

        <table class="table table-bordered mb-5">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Логин</th>
                <th scope="col">Почта</th>
                <th scope="col">Пароль</th>
            </tr>
            </thead>
            <tbody v-for="(item, index) in users" :key="index">
            <tr>
                <th scope="row">{{ index }}</th>
                <td>{{ item.login }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.password }}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-primary">Сохранить изменения</button>
                    <button type="button" class="btn btn-sm btn-danger">Удалить</button>
                </td>
            </tr>
            </tbody>
        </table>

        <table class="table table-bordered mb-5">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Имя</th>
                <th scope="col">Цена</th>
                <th scope="col">Статус</th>
                <th scope="col">Дата создания</th>
            </tr>
            </thead>
            <tbody v-for="(item, index) in transactions" :key="index">
            <tr>
                <th scope="row">{{ index }}</th>
                <td>{{ item.name }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.created_at }}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-primary">Сохранить изменения</button>
                    <button type="button" class="btn btn-sm btn-danger">Удалить</button>
                </td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from "vuex";

export default {
    name: "AdminPanel",
    data() {
        return {
            products: [],
            users: [],
            transactions: []
        }
    },
    computed: {
        ...mapState({
            apiKey: state => state.apiKey,
        }),
    },
    async mounted() {
        this.incompletedTransactions = await axios.get('/api/transactions', { headers: {Authorization: `Bearer ${this.apiKey}`},  params: {type: 'INCOMPLETED'}})
        this.incompletedTransactions = await this.incompletedTransactions.data.transactions;

        this.completedTransactions = await axios.get('/api/transactions', { headers: {Authorization: `Bearer ${this.apiKey}`},  params: {type: 'COMPLETED'}})
        this.completedTransactions = await this.completedTransactions.data.transactions;

        this.transactions = this.completedTransactions.concat(this.incompletedTransactions);

        this.products = await axios.get('/api/products', { headers: {Authorization: `Bearer ${this.apiKey}`}})
        this.products = await this.products.data.products;

        this.users = await axios.get('/api/users', { headers: {Authorization: `Bearer ${this.apiKey}`}})
        this.users = await this.users.data.users;
    },
    methods: {
        delete(id, type) {
            switch (type) {
                case 'transaction':
                    axios.get('/api/products', { headers: {Authorization: `Bearer ${this.apiKey}`}})
                    break;
                case 'user':
                    axios.get('/api/products', { headers: {Authorization: `Bearer ${this.apiKey}`}})
                    break;
                case 'product':
                    axios.get('/api/products', { headers: {Authorization: `Bearer ${this.apiKey}`}})
                    break;
            }
        }
    }
}
</script>

<style scoped>

</style>
