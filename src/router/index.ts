import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import About from "@/views/About.vue";
import Main from "@/views/Main.vue";
import ProductPage from "@/views/ProductPage/index.vue";
import ProductsPage from "@/views/ProductsPage/index.vue";
import LikedProductsPage from "@/views/LikedProductsPage.vue";
import BasketPage from "@/views/BasketPage.vue";
import CreateProductPage from "@/views/CreateProductPage/index.vue";
import Orders from "@/views/Orders.vue";
import store from "@/store/index";
import { AuthActions } from "@/store/modules/auth/actions";
import { userRoles } from "@/store/types";

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
    path: "/product",
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
  {
    path: "/liked-products",
    name: "LikedProductsPage",
    component: LikedProductsPage,
    meta: {
      title: "Товар",
      auth: false,
    },
  },
  {
    path: "/basket",
    name: "BasketPage",
    component: BasketPage,
    meta: {
      title: "Корзина",
      auth: true,
    },
  },
  {
    path: "/create-product",
    name: "CreateProductPage",
    component: CreateProductPage,
    meta: {
      title: "Создать товар",
      auth: true,
      role: userRoles.ADMIN,
    },
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
    meta: {
      title: "Заказы",
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (localStorage.getItem("token")) {
      if (from.path === to.path) {
        next();
      } else {
        store
          .dispatch(AuthActions.CHECK_AUTH)
          .then(() => {
            const role = to.meta.role;
            if (role === userRoles.ADMIN) {
              if (store.getters.isGranted(userRoles.ADMIN)) {
                next();
              } else next("/");
            } else {
              next();
            }
          })
          .catch(() => next("/"));
      }
    } else next("/");
  } else {
    next();
  }
});
