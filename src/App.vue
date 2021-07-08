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
html{
  overflow: auto !important;
}
.v-main{
  background-image: linear-gradient(rgb(68, 68, 68), rgb(36, 36, 36));
}
</style>
