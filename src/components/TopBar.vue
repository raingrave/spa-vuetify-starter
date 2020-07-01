<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="primary"
    dark
    dense
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title style="width: 260px" class="ml-0 pl-4">
      <span class="hidden-sm-and-down">aaaa</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
      class="hidden-sm-and-down rounded-0"
      dense
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-badge color="success" content="20" overlap>
        <v-icon>mdi-bell</v-icon>
      </v-badge>
    </v-btn>
    <v-btn icon large>
      <logout></logout>
    </v-btn>
  </v-app-bar>
</template>

<script>
import Logout from '@/components/auth/Logout'

export default {
  name: "TopBar",
  components: {
    Logout
  }
}
</script>
