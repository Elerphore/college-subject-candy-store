<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img :src="'candy/'+item.image" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">{{ item.amount }}</p>
                <button v-if="isAuthorized" @click="createTransaction()" class="btn btn-primary">В корзину</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "Product",
    props: ['item'],
    methods: {
        createTransaction() {
            console.log(this.apiKey)
            axios.post('/api/products',
                { product_id: this.item.id},
                { headers: { Authorization: `Bearer ${this.apiKey}` } }
            ).catch(e => {
                console.error(e)
            })
        }
    },

    computed: {
        ...mapState({
            isAuthorized: state => state.isAuthorized,
            apiKey: state => state.apiKey,
        }),
    }
}
</script>

<style scoped>

</style>
