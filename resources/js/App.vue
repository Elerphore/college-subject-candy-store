<template>
  <div class="app d-flex flex-column min-vh-100">
      <nav-bar class="mb-5"></nav-bar>
      <router-view class="container mb-5"></router-view>
      <window-footer style="height: 16vh;" class="mt-auto"></window-footer>
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

