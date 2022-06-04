<template>
    <nav-bar class="mb-2"></nav-bar>
    <products-list class="container"></products-list>
    <window-footer></window-footer>
</template>

<script>
import NavBar from "@/Components/NavBar";
import WindowFooter from "@/Components/WindowFooter";
import ProductsList from "@/Components/ProductsList";
export default {
    name: "MainWindow",
    components: {ProductsList, WindowFooter, NavBar}
}
</script>

<style>

</style>
