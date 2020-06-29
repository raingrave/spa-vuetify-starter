<template>
  <v-row>
    <v-col>
      <form-login></form-login>
    </v-col>
  </v-row>
</template>

<script>
import FormLogin from '@/components/auth/FormLogin'
export default {
  name: 'Login',
  components: {
    FormLogin
  }
}
</script>
