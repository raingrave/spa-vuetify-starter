<template>
  <v-row>
    <v-col>{{ isLogged }}
      <v-icon @click="logout()">
        mdi-logout-variant
      </v-icon>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'Logout',
    computed: {
      isLogged () {
        return this.$store.state.isLogged
      }
    },
    methods: {
      logout () {
        localStorage.removeItem('user')
        this.$router.push({ name: 'login' })
      }
    }
  }
</script>