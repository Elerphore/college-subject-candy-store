<template>
    <div class="account">
        <h1>{{ products }}</h1>
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
        axios.post('/api/products',
            {
                type: 'COMPLETED'
            },
            { headers: { Authorization: `Bearer ${this.apiKey}` } }
        ).then(resp => {
            console.log(this.products)
            this.products = resp.data
        }).catch(e => {
            console.error(e)
        })
    }
}
</script>

<style scoped>

</style>
