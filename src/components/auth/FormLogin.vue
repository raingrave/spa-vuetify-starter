<template>
  <v-app id="inspire">
    <v-main>
      <v-card
    class="mx-auto mt-6"
    width="344"
  >
  </v-card>
      <v-container
        fluid
        fill-height
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
              >
                <v-toolbar-title text="center">Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="credentials.email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="credentials.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  block
                  color="primary"
                  @click="sendForm(credentials)"
                  :loading="loading"
                  :disabled="loading"
                >
                  Entrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'FormLogin',
    data () {
      return {
        credentials: {},
        loading: false
      }
    },
    props: {
      source: String,
    },
    methods: {
      sendForm (credentials) {
        console.log(credentials)
        if (credentials.email == 'raintech@outlook.com' && credentials.password == 123456) {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            localStorage.setItem('user', { id: 1, name: 'Luis Fernando' })
            this.$router.push({ name: 'dashboard.profile' })
          }, 3000)
        }
      }
    }
  }
</script>