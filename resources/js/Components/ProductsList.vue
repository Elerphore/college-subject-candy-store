<template>
    <div>
        <product v-for="item in products" :item="item"></product>
    </div>
</template>

<script>
import Product from "./Product";
export default {
    name: "ProductsList",
    components: {Product},
    data() {
        return {
            products: []
        }
    },
    mounted() {
        axios.get("/api/products")
            .then(resp => { this.products = resp.data.products })
    }
}
</script>

<style scoped>

</style>
