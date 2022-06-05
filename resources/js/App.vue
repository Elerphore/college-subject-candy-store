<template>
  <div class="app d-grid align-content-between">
      <nav-bar class="mb-5"></nav-bar>
      <router-view class="container mb-5"></router-view>
  </div>
</template>

<script>
import './Styles/app.scss'
import NavBar from "./Components/NavBar";
import WindowFooter from "./Components/WindowFooter";

export default {
  name: 'app',
    components: {WindowFooter, NavBar}
}
</script>

