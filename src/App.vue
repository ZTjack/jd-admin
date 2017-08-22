<template>
  <div id="app" class="app">
    <layout v-if='isLogin'></layout>
    <login v-else></login>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Layout from 'components/layout/Layout'
  import Login from 'components/auth/login/Login'
  import AuthLayout from './components/layout/AuthLayout'
  import VuesticPreLoader from './components/vuestic-components/vuestic-preloader/VuesticPreLoader.vue'

  export default {
    name: 'app',
    components: {
      VuesticPreLoader,
      AuthLayout,
      Layout,
      Login
    },
    computed: {
      ...mapGetters([
        'isLogin'
      ]),
      isAuth () {
        return this.$route.path.match('auth')
      }
    }
  }
</script>

<style lang="scss">
  @import "sass/main";
  body {
    height: 100%;
    .app {
      height: 100%;
    }
  }
</style>
