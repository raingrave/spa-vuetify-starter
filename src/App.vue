<template>
  <div>
    <v-app id="inspire" v-if="showLayout">
      <v-navigation-drawer
      v-model="drawer"
      app
      >
        <Menu></Menu>
      </v-navigation-drawer>

      <top-bar></top-bar>

      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer
        color="primary"
        app
      >
        <span class="white--text text-right">
          &copy; {{ appName }}
        </span>
      </v-footer>
    </v-app>

    <v-container v-else>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
  import Menu from '@/components/Menu'
  import TopBar from '@/components/TopBar'
  import { mapGetters } from 'vuex'

  export default {
    mounted () {
      this.$store.dispatch('changeAppName', 'Fraudestroyer 2020')
    },
    components: {
      Menu,
      TopBar
    },
    computed: {
      ...mapGetters(['appName']),
      showLayout () {
        return this.$route.name != 'login'
      }
    },
    data: () => ({
      drawer: null
    }),
  }
</script>

<style>
</style>
