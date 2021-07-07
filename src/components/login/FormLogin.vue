<template>
  <div>
    <v-row class="mt-12 mx-12" no-gutters>
      <v-text-field
        outlined
        color="grey"
        background-color="white"
        label="E-mail"
        prepend-inner-icon="mdi-gmail"
      ></v-text-field>
    </v-row>
    <v-row class="mx-12" no-gutters>
      <v-text-field
        outlined
        color="grey"
        background-color="white"
        label="Senha"
        type="password"
        prepend-inner-icon="mdi-lock"
      ></v-text-field>
    </v-row>
    <v-row class="mx-12" no-gutters justify="center">
      <v-btn @click="login" depressed rounded width="100%">Entrar</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ name: "CurrencyQuote" });
    },
  },
};
</script>
