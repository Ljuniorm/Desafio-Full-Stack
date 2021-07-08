<template>
  <div class="login-container">
    <div class="login-box">
      <v-col class="mt-12">
        <v-row justify="center" no-gutters>
          <h2 class="white--text">Desafio</h2>
        </v-row>
        <v-row justify="center" no-gutters>
          <h1 class="white--text">Full Stack</h1>
        </v-row>
        <form-login />
      </v-col>
    </div>
  </div>
</template>

<script>
import FormLogin from "../components/login/FormLogin.vue";
export default {
  components: { FormLogin },
};
</script>

<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgb(68, 68, 68), rgb(36, 36, 36));
}
.login-box {
  height: 500px;
  width: 100%;
  max-width: 500px;
  background-color: rgba(77, 77, 77, 0.411);
  border-radius: 9px;
  border: 1px solid rgba(255, 255, 255, 0.349);
  display: flex;
  flex-direction: column;
  margin: 20px;
}
</style>
