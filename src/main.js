import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify/lib/framework.mjs";
import "./assets/main.css";
import { createStore } from "vuex";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./router";
import "vuetify/styles";
import "vuetify/dist/vuetify.min.css";
const app = createApp(App);
app.use(router);
const vuetify = createVuetify({
  components,
  directives,
});
app.use(vuetify);
app.mount("#app");
