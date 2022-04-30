import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/css/index.css'
import "@storefront-ui/vue/styles.scss";

createApp(App).use(store).use(router).mount("#app");
