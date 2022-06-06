<template>
    <div class="store">
        <div class="mb-3">
            <button class="btn btn-outline-primary" @click="filter(false)">Изделия</button>
            <button class="btn btn-outline-primary" @click="filter(true)">Начинки для тортов</button>
        </div>
        <products-list :filter="isFilter" class="container"></products-list>
    </div>
</template>

<script>
import ProductsList from "../Components/ProductsList";
import WindowFooter from "../Components/WindowFooter";
import NavBar from "../Components/NavBar";

import { mapState } from 'vuex';

export default {
    name: "Store",
    data() {
        return {
            isFilter: false
        }
    },
    components: {NavBar, WindowFooter, ProductsList},
    computed: {
        ...mapState({
            isAuthorized: state => state.isAuthorized,
            apiKey: state => state.apiKey
        }),
    },
    methods: {
        filter(state) { this.isFilter = state }
    }

}
</script>

<style scoped>

</style>
