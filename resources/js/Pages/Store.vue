<template>
    <div class="store">
        <nav-bar class="mb-2"></nav-bar>
        <products-list class="container"></products-list>
        <div>{{ isAuthorized }}</div>
        <window-footer></window-footer>
    </div>
</template>

<script>
import ProductsList from "../Components/ProductsList";
import WindowFooter from "../Components/WindowFooter";
import NavBar from "../Components/NavBar";

import { mapState } from 'vuex';

export default {
    name: "Store",
    components: {NavBar, WindowFooter, ProductsList},
    computed: {
        ...mapState({
            isAuthorized: state => state.isAuthorized
        }),
    }

}
</script>

<style scoped>

</style>
