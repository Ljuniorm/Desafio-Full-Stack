<template>
  <v-app>
    <app-bar v-if="$route.name !== 'Login'" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/shared/AppBar.vue";
export default {
  components: { AppBar },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
html {
  overflow: hidden !important;
}
</style>
