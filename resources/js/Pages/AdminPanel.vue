<template>
    <div class="adminPanel">
        <h1>Продукты</h1>
        <table class="table table-bordered mb-5">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Описание</th>
                <th scope="col">Цена</th>
                <th scope="col">Начинка</th>
                <th scope="col">Изображение</th>
                <th scope="col">Выбрать новое изображение</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th></th>
                <td><input v-model="product.name" type="text"></td>
                <td><input v-model="product.description" type="text"></td>
                <td><input v-model="product.amount" type="text"></td>
                <td><input v-model="product.filling" type="checkbox"></td>
                <td>{{ product.image }}</td>
                <td>
                    <div class="mb-3">
                        <label :for="`image_input_product}`" class="form-label btn btn-primary">Выбрать</label>
                        <input style="display: none" :id="`image_input_product}`" @change="imageSelected($event, product)" class="form-control form-control-sm" type="file">
                    </div>
                </td>
                <td>
                    <button @click="addItem('product')" type="button" class="btn btn-sm btn-success mb-1">Добавить</button>
                </td>
            </tr>
            <template v-for="(item, index) in products">
                <tr>
                    <th scope="row">{{ index }}</th>
                    <td><input type="text" v-model="item.name"></td>
                    <td><input type="text" v-model="item.description"></td>
                    <td><input type="text" v-model="item.amount"></td>
                    <td><input v-model="item.filling" type="checkbox"></td>
                    <td>{{ item.image }}</td>
                    <td>
                        <div class="mb-3">
                            <label :for="`image_input_${index}`" class="form-label btn btn-primary">Выбрать</label>
                            <input style="display: none" :id="`image_input_${index}`" @change="imageSelected($event, item)" class="form-control form-control-sm" type="file">
                        </div>
                    </td>
                    <td>
                        <button @click="updateItem(item, 'product')" type="button" class="btn btn-sm btn-primary mb-1">Сохранить изменения</button>
                        <button @click="deleteItem(item.id, 'product')" type="button" class="btn btn-sm btn-danger">Удалить</button>
                    </td>
                </tr>
            </template>

            </tbody>
        </table>

        <h1>Пользователи</h1>
        <table class="table table-bordered mb-5">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Логин</th>
                <th scope="col">Почта</th>
                <th scope="col">ФИО</th>
                <th scope="col">Пароль</th>
                <th scope="col">Администратор</th>
            </tr>
            </thead>
            <tbody>

            <tr>
                <th></th>
                <td><input v-model="user.login" type="text"></td>
                <td><input v-model="user.email" type="text"></td>
                <td><input v-model="user.fio" type="text"></td>
                <td><input v-model="user.password" type="text"></td>
                <td><input type="checkbox" v-model="user.isAdmin"></td>
                <td>
                    <button @click="addItem('user')" type="button" class="btn btn-sm btn-success mb-1">Добавить</button>
                </td>
            </tr>

            <template v-for="(item, index) in users">
                <tr>
                    <th scope="row">{{ index }}</th>
                    <td><input type="text" v-model="item.login"></td>
                    <td><input type="text" v-model="item.email"></td>
                    <td><input type="text" v-model="item.fio"></td>
                    <td><input type="text" v-model="item.password"></td>
                    <td><input type="checkbox" v-model="item.isAdmin"></td>
                    <td>
                        <button @click="updateItem(item, 'user')" type="button" class="btn btn-sm btn-primary mb-1">Сохранить изменения</button>
                        <button @click="deleteItem(item.id, 'user')" type="button" class="btn btn-sm btn-danger">Удалить</button>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>

        <h1>Транзакции</h1>
        <table class="table table-bordered mb-5">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Номре клиента</th>
                <th scope="col">Номер продукта</th>
                <th scope="col">Статус</th>
                <th scope="col">Дата создания</th>
            </tr>
            </thead>
            <tbody v-for="(item, index) in transactions" :key="index">
            <tr>
                <th scope="row">{{ index }}</th>
                <td><input type="text" v-model="item.user_id"></td>
                <td><input type="text" v-model="item.product_id"></td>
                <td><input type="text" v-model="item.status === 'COMPLETED' ? 'Завершённая' : 'Незавершённая'"></td>
                <td><input type="text" v-model="item.created_at"></td>
                <td><button @click="deleteItem(item.id, 'transaction')" type="button" class="btn btn-sm btn-danger">Удалить</button></td>
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
            transactions: [],
            product: {
                name: "",
                image: "",
                amount: 0.00,
                filling: false,
                description: "",
                imageFile: "",
            },
            user: {
                login: "",
                email: "",
                password: "",
                isAdmin: false,
            }
        }
    },
    computed: {
        ...mapState({
            apiKey: state => state.apiKey,
        }),
    },
    async mounted() {
        this.transactions = await axios.get('/api/all/transaction', { headers: {Authorization: `Bearer ${this.apiKey}`}})
        this.transactions = this.transactions.data.transactions

        this.products = await axios.get('/api/products', { headers: {Authorization: `Bearer ${this.apiKey}`}})
        this.products = await this.products.data.products;

        this.users = await axios.get('/api/users', { headers: {Authorization: `Bearer ${this.apiKey}`}})
        this.users = await this.users.data.users;
    },
    methods: {
        imageSelected(e, item) {
            console.log("hello")
            item.image = e.target.files[0].name
            item.imageFile = e.target.files[0]
        },
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
                case 'user':
                    axios.patch('/api/user',
                        {id: item.id, login: item.login, email: item.email, password: item.password, isAdmin: item.isAdmin},
                        { headers: {Authorization: `Bearer ${this.apiKey}`}})
                    break;
                case 'product':
                    let fd = new FormData();
                    fd.append('id', item.id);
                    fd.append('name', item.name);
                    fd.append('amount', item.amount);
                    fd.append('description', item.description);
                    fd.append('image', item.image);
                    fd.append('filling', Number(item.filling));
                    fd.append('image_file', item.imageFile);

                    console.error(fd.get('image_file'))
                    axios.post(
                        "/api/update/product",
                        fd,
                        {
                            headers: {
                                Authorization: `Bearer ${this.apiKey}`,
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                        .catch((e) => {
                            console.error(e)
                        })
                    break;
            }
        },
        addItem(type) {
            switch (type) {
                case 'user':
                    axios.put('/api/addUser',
                        {
                            login: this.user.login,
                            password: this.user.password,
                            email: this.user.email,
                            isAdmin: this.user.isAdmin,
                            },
                        { headers: {Authorization: `Bearer ${this.apiKey}`}}
                    ).then(resp => {
                        this.users.push(this.user)
                    })
                    break;
                case 'product':
                    console.warn(this.product)
                    let fd = new FormData();
                    fd.append('name', this.product.name);
                    fd.append('amount', this.product.amount);
                    fd.append('description', this.product.description);
                    fd.append('image', this.product.image);
                    fd.append('filling', Number(this.product.filling));
                    fd.append('image_file', this.product.imageFile);

                    axios.post('/api/addProduct',
                        fd,
                        { headers: {Authorization: `Bearer ${this.apiKey}`}}
                    ).then(resp => {
                        this.products.push(this.product)
                    })
                    break;
            }
        }
    }
}
</script>

<style scoped>

</style>
