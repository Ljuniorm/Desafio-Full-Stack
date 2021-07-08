import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue"
import CurrencyQuote from "../views/CurrencyQuote.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/currencyQuote",
    name: "CurrencyQuote",
    component: CurrencyQuote,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
