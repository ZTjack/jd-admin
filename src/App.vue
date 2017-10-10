<template>
  <router-view v-if="isAuth"></router-view>
  <Login v-else></Login>
</template>

<script>
  import {mapState} from 'vuex'
  import Login from './views/pages/Login.vue'
  export default {
    name: 'app',
    components: {
      Login
    },
    computed: {
      ...mapState(['isAuth'])
    }
  }
</script>

<style>
  // Import Font Awesome Icons Set
  $fa-font-path: "~font-awesome/fonts/";
  @import "~font-awesome/css/font-awesome.min.css";
  // Import Simple Line Icons Set
  $simple-line-font-path: "~simple-line-icons/fonts/";
  @import "~simple-line-icons/css/simple-line-icons.css";
</style>
<style lang="scss">
  // Import Main styles for this application
  @import "./scss/style";
</style>
