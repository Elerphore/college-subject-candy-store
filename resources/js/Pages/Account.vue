<template>
    <div class="account">
        <h1>Свершённые транзакции</h1>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Цена</th>
                <th scope="col">Дата</th>
            </tr>
            </thead>
            <tbody v-for="(item, index) in products" :key="index">
            <tr>
                <th scope="row">{{ index }}</th>
                <td>{{ item.name }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.created_at }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapState} from "vuex";
import axios from "axios";

export default {
    name: "Account",
    data() {
        return {
            products: []
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
                params: { type: 'COMPLETED' },
                headers: { Authorization: `Bearer ${this.apiKey}` },
            }
        ).then(resp => {
            console.log(this.products)
            this.products = resp.data.transactions
        }).catch(e => {
            console.error(e)
        })
    }
}
</script>

<style scoped>

</style>
