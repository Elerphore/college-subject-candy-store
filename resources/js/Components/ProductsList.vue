<template>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <template v-for="(item, index) in products" v-if="(item.filling == filter) || (item.filling == null && filter == false)" :item="item">
            <product :item="item" :index="index"></product>
            <product-modal :title.sync="item.name" :description.sync="item.description" :id-modal="index"></product-modal>
        </template>
    </div>
</template>

<script>
import Product from "./Product";
import ProductModal from "./ProductModal";
export default {
    name: "ProductsList",
    props: {
        filter: {
            type: Boolean,
            default: true
        }
    },
    components: {ProductModal, Product},
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
