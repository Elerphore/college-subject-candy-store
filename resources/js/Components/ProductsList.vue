<template>
    <div class="row row-cols-1 row-cols-md-3 g-4">
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
