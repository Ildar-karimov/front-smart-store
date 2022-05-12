import { createApp } from "vue";
import App from "./layouts/index.vue";
import router from "./router";
import store from "./store/index";
import "./assets/css/index.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import rusLanguage from "element-plus/es/locale/lang/ru";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, {
    locale: rusLanguage,
  })
  .mount("#app");
