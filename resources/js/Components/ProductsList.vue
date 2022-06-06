<template>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <product v-for="item in products" v-if="(item.filling == filter) || (item.filling == null && filter == false)" :item="item"></product>
    </div>
</template>

<script>
import Product from "./Product";
export default {
    name: "ProductsList",
    props: {
        filter: {
            type: Boolean,
            default: true
        }
    },
    components: {Product},
    data() {
        return {
            products: []
        }
    },
    mounted() {
        console.error("is filter: " + this.filter)
        axios.get("/api/products")
            .then(resp => { this.products = resp.data.products })
    }
}
</script>

<style scoped>

</style>
