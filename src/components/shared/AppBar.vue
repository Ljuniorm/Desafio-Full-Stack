<template>
  <v-app-bar height="65" app color="rgb(36, 36, 36)" dark elevation="1">
    <h2 class="white--text">Desafio Full Stack</h2>
    <v-spacer></v-spacer>
    <v-btn @click="goLogin" target="_blank" text>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
