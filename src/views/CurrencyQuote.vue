<template>
  <div class="container-style">
    <div
      class="container-analytics"
      :class="$vuetify.breakpoint.mdAndUp ? '' : 'ma-12'"
      :style="$vuetify.breakpoint.mdAndUp ? 'height: 62vh' : 'height: 97%'"
    >
      <v-row v-if="currency" no-gutters justify="end">
        <v-btn
          color="grey"
          depressed
          rounded
          class="mb-n16 mr-10 mt-8"
          @click="setCurrency"
          ><span class="white--text">Ver Todas</span>
        </v-btn>
      </v-row>
      <v-row class="pb-10 mt-8" no-gutters justify="center">
        <v-col align="center">
          <h2 class="white--text">COTAÇÃO DAS PRINCIPAIS MOEDAS PARA O REAL</h2>
        </v-col>
      </v-row>
      <v-row class="px-6" no-gutters>
        <v-divider></v-divider>
      </v-row>
      <div class="container-currencies">
        <v-row v-if="currencies && !currency" no-gutters justify="center">
          <v-col
            align="center"
            :cols="$vuetify.breakpoint.mdAndUp ? '3' : '12'"
            v-for="(currency, i) in currencies"
            :key="i"
          >
            <v-card
              @mouseenter="hover = i"
              @mouseleave="hover = null"
              class="mt-6 pt-4"
              @click="viewGrafic(currency)"
              :elevation="hover === i ? '4' : '0'"
              color="transparent"
              height="150px"
              style="border-radius: 15px"
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
        <v-row v-if="currency" no-gutters justify="center">
          <Graphic :currency="storageObjectGraphic[currency.name]" />
        </v-row>
        <v-row v-if="!currencies" justify="center" no-gutters>
          <v-progress-linear indeterminate color="black"></v-progress-linear>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Graphic from "../components/currencyQuote/Graphic.vue";
export default {
  components: { Graphic },
  data() {
    return {
      hover: null,
      storageObjectGraphic: null,
    };
  },
  computed: {
    ...mapGetters(["currencies", "currency"]),
  },
  async mounted() {
    await this.$store.dispatch("getAnalytics");
    this.storageObjectGraphic = JSON.parse(
      localStorage.getItem("OBJECT_GRAPHIC")
    );
    this.setDate();
  },
  methods: {
    viewGrafic(item) {
      console.log(
        "🚀 ~ file: CurrencyQuote.vue ~ line 105 ~ viewGrafic ~ item",
        item
      );
      this.hover = null;
      this.$store.commit("SET_CURRENCY", item);
    },
    setDate() {
      let date = new Date(),
        day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`,
        month =
          date.getMonth() + 1 > 9
            ? date.getMonth() + 1
            : `0${date.getMonth() + 1}`,
        year =
          date.getFullYear() > 9
            ? date.getFullYear()
            : `0${date.getFullYear()}`,
        todayDate = `${day}/${month}/${year}`;
      this.$store.dispatch("setTodayDate", todayDate);
    },
    setCurrency() {
      this.$store.commit("SET_CURRENCY", null);
    },
  },
};
</script>

<style scoped>
.container-style {
  height: 100%;
  margin: 0px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-analytics {
  background-color: white;
  width: 80vw;
  border-radius: 9px;
  background-color: rgba(77, 77, 77, 0.411);
  border: 1px solid rgba(255, 255, 255, 0.349);
}
</style>
