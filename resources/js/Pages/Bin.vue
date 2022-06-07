<template>
    <div class="bin">
        <h1>Корзина</h1>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Цена</th>
                <th scope="col">Выбрать</th>
            </tr>
            </thead>
            <tbody v-for="(item, index) in products" :key="index">
                <tr>
                    <th scope="row">{{ index }}</th>
                    <td>{{ item.name }}</td>
                    <td>{{ item.amount }}</td>
                    <td>
                        <input :value="item.id" v-model="selected" type="checkbox" class="btn-check" :id="`btncheck_${index}`" autocomplete="off">
                        <label class="btn btn-outline-primary" :for="`btncheck_${index}`">Выбрать</label>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="gap-2 mx-auto" v-if="products.length > 0">
            <button class="btn btn-primary" type="button" @click="transaction()">Оформить заказ</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from "vuex";

export default {
    name: "bin",
    data() {
        return {
            products: [],
            selected: []
        }
    },
    computed: {
        ...mapState({
            apiKey: state => state.apiKey,
        }),
    },
    mounted() {
        console.log(this.apiKey)
        axios.get('/api/transactions',
            {
                headers: { Authorization: `Bearer ${this.apiKey}` },
                params: { type: 'INCOMPLETED' }
            }
        ).then(resp => {
            console.log(this.products)
            this.products = resp.data.transactions
            this.selected = resp.data.transactions.map(item => item.id);
        }).catch(e => {
            console.error(e)
        })
    },
    methods: {
        transaction() {
            this.products = this.products.filter((item) => {
                !this.selected.includes(item.id)
            })

            axios.post('/api/transactions', {transactions: this.selected}, { headers: { Authorization: `Bearer ${this.apiKey}` } })
                .then(() => {
                    window.open("/check.pdf")
                    this.$router.push('/')
                })
        }
    }

}
</script>

<style scoped>

</style>
