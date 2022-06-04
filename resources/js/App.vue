<template>
  <div class="app">
      <nav-bar class="mb-2"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import './Styles/app.scss'
import NavBar from "./Components/NavBar";

export default {
  name: 'app',
    components: {NavBar}
}
</script>

