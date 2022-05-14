import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import About from "@/views/About.vue";
import Main from "@/views/Main.vue";
import ProductPage from "@/views/ProductPage/index.vue";
import ProductsPage from "@/views/ProductsPage/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {
      title: "Главная страница",
      auth: false,
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "Про нас",
      auth: false,
    },
  },
  {
    path: "/products",
    name: "ProductsPage",
    component: ProductsPage,
    meta: {
      title: "Товары",
      auth: false,
    },
  },
  {
    path: "/product/:id",
    name: "ProductPage",
    component: ProductPage,
    meta: {
      title: "Товар",
      auth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
