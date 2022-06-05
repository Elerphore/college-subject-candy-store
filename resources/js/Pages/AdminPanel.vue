<template>
    <div class="adminPanel">
        <h1>Продукты</h1>
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
                <td><input type="text" v-model="item.name"></td>
                <td><input type="text" v-model="item.amount"></td>
                <td><input type="text" v-model="item.image"></td>
                <td>
                    <button @click="updateItem(item, 'product')" type="button" class="btn btn-sm btn-primary">Сохранить изменения</button>
                    <button @click="deleteItem(item.id, 'product')" type="button" class="btn btn-sm btn-danger">Удалить</button>
                </td>
            </tr>
            </tbody>
        </table>

        <h1>Пользователи</h1>
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
                <td><input type="text" v-model="item.login"></td>
                <td><input type="text" v-model="item.email"></td>
                <td><input type="text" v-model="item.password"></td>
                <td>
                    <button @click="updateItem(item, 'user')" type="button" class="btn btn-sm btn-primary">Сохранить изменения</button>
                    <button @click="deleteItem(item.id, 'user')" type="button" class="btn btn-sm btn-danger">Удалить</button>
                </td>
            </tr>
            </tbody>
        </table>

        <h1>Транзакции</h1>
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
                    <button @click="deleteItem(item.id, 'transaction')" type="button" class="btn btn-sm btn-danger">Удалить</button>
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
        deleteItem(id, type) {
            switch (type) {
                case 'transaction':
                    axios.delete('/api/transaction', { headers: {Authorization: `Bearer ${this.apiKey}`}, params: { id: id }})
                    break;
                case 'user':
                    axios.delete('/api/user', { headers: {Authorization: `Bearer ${this.apiKey}`}, params: { id: id }})
                    break;
                case 'product':
                    axios.delete('/api/product', { headers: {Authorization: `Bearer ${this.apiKey}`}, params: { id: id }})
                    break;
            }
        },
        updateItem(item, type) {
            console.error(item)
            switch (type) {
                case 'transaction':
                    axios.patch('/api/transaction',
                        {},
                        { headers: {Authorization: `Bearer ${this.apiKey}`}})
                    break;
                case 'user':
                    axios.patch('/api/user',
                        {id: item.id, login: item.login, email: item.email, password: item.password},
                        { headers: {Authorization: `Bearer ${this.apiKey}`}})
                    break;
                case 'product':
                    axios.patch('/api/product',
                        {
                            id: item.id,
                            name: item.name,
                            amount: item.amount,
                            image: item.image,
                        },
                        { headers: {Authorization: `Bearer ${this.apiKey}`}})
                        .catch((e) => {
                            console.error(e)
                        })
                    break;
            }
        }
    }
}
</script>

<style scoped>

</style>
