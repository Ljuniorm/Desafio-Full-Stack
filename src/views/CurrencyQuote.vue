<template>
  <div class="container-style">
    <div class="container-analytics">
      <v-row class="py-10" no-gutters justify="center">
        <h2 class="white--text">COTAÇÃO DAS PRINCIPAIS MOEDAS PARA O REAL</h2>
      </v-row>
      <v-row class="px-6" no-gutters>
        <v-divider></v-divider>
      </v-row>
      <div class="container-currencies">
        <v-row no-gutters justify="center">
          <v-col
            align="center"
            cols="3"
            v-for="(currency, i) in currencies"
            :key="i"
          >
            <v-card
              class="mt-6 pt-4"
              elevation="0"
              color="transparent"
              height="150px"
              width="200px"
            >
              <v-chip
                :color="
                  Math.sign(currency.variation) === 1 ||
                  Math.sign(currency.variation) === 0
                    ? 'green'
                    : 'red'
                "
              >
                <b class="white--text"
                  >{{ new Intl.NumberFormat().format(currency.variation) }} %</b
                ></v-chip
              >
              <v-row class="my-3" no-gutters justify="center">
                <h2 class="white--text">
                  R$ {{ new Intl.NumberFormat().format(currency.buy) }}
                </h2>
              </v-row>
              <v-row no-gutters justify="center">
                <h4 class="white--text">{{ currency.name.toUpperCase() }}</h4>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["currencies"]),
  },
  mounted() {
    this.$store.dispatch("getAnalytics");
  },
  watch: {
    currencies(v) {
      console.log("🚀 ~ file: CurrencyQuote.vue ~ line 25 ~ currencies ~ v", v);
    },
  },
};
</script>

<style scoped>
.container-style {
  height: calc(100vh - 65px);
  margin: 0px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgb(68, 68, 68), rgb(36, 36, 36));
}
.container-analytics {
  background-color: white;
  height: 62vh;
  width: 80vw;
  border-radius: 9px;
  background-color: rgba(77, 77, 77, 0.411);
  border: 1px solid rgba(255, 255, 255, 0.349);
}
</style>
