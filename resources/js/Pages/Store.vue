<template>
    <div class="store">
        <products-list class="container"></products-list>
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
            isAuthorized: state => state.isAuthorized,
            apiKey: state => state.apiKey
        }),
    }

}
</script>

<style scoped>

</style>
