import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      themes: {
        light: {
          white:"#FFFFFF",
          button:"#53CFD7",
          blackIcon:"#212121",
          bt_color:"#0067AF",
          darkBlue:"#192b46",
          lightBlue:"#E3EEF9"
          },
        dark: {
        },
      },
  },
});
