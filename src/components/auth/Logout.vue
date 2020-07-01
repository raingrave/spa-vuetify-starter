<template>
  <v-icon @click="logout()">
    mdi-logout-variant
  </v-icon>
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