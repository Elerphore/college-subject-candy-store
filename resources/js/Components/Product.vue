<template>
    <div class="col">
        <div class="card h-100" style="width: 18rem;">
            <img :src="'candy/'+item.image" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ item.name }} : {{ item.amount }}</h5>
            </div>
            <div class="card-footer">
                <button v-if="isAuthorized" @click="createTransaction()" class="btn btn-primary">В корзину</button>
                <button class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#product-description-${index}`">Описание</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
// import ProductModal from "./ProductModal";

export default {
    name: "Product",
    props: ['item', 'index'],
    methods: {
        createTransaction() {
            console.log(this.apiKey)
            axios.put('/api/products',
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
    },
    mounted() {
        console.warn(this.item)
    }
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>
