<template>
  <div>
    <v-app id="inspire" v-if="showLayout">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-item :to="{ name: 'dashboard' }" link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{ name: 'profile', params: { id: 99 } }" link>
            <v-list-item-action>
              <v-icon>mdi-user-edit</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <logout></logout>
      </v-app-bar>

      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
      <v-footer
        color="indigo"
        app
      >
        <span class="white--text">&copy; {{ appName }} 2019</span>
      </v-footer>
    </v-app>
    <v-container v-else>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
  import Logout from '@/components/auth/Logout'
  import { mapGetters } from 'vuex'

  export default {
    mounted () {
      this.$store.dispatch('changeAppName', 'App do Rain')
    },
    components: {
      Logout
    },
    computed: {
      ...mapGetters(['appName']),
      showLayout () {
        return this.$route.name != 'login'
      }
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>

<style>
</style>
