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
            console.warn(this.item)
        }
    },

    computed: {
        ...mapState({
            isAuthorized: state => state.isAuthorized
        }),
    }
}
</script>

<style scoped>

</style>
