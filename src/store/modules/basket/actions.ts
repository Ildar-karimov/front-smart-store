import { ActionTree } from "vuex";
import { Loading, RootState } from "@/store/types";
import $api from "@/api";
import { BasketState } from "@/store/modules/basket/types";
import { BasketMutations } from "@/store/modules/basket/mutations";
import { Product } from "@/store/modules/product/types";

export enum BasketActions {
  GET_BASKET_PRODUCTS = "GET_BASKET_PRODUCTS",
  CREATE_BASKET_PRODUCT = "CREATE_BASKET_PRODUCT",
  REMOVE_BASKET_PRODUCT = "REMOVE_BASKET_PRODUCT",
  CREATE_ORDER = "CREATE_ORDER",
  GET_USER_ORDERS = "GET_USER_ORDERS",
  GET_ALL_ORDERS = "GET_ALL_ORDERS",
  CHANGE_ORDER_STATUS = "CHANGE_ORDER_STATUS",
}

export const actions: ActionTree<BasketState, RootState> = {
  async [BasketActions.GET_BASKET_PRODUCTS](context) {
    context.state.basketProductsLoading = Loading.LOADING;
    const res = await $api.get("/order/product-basket");
    context.commit(BasketMutations.SET_BASKET_PRODUCTS, res.data);
  },

  async [BasketActions.CREATE_BASKET_PRODUCT](context, product: Product) {
    await $api.post("/order/create-product-basket", product);
  },

  async [BasketActions.REMOVE_BASKET_PRODUCT](context, product) {
    await $api.delete("/order/delete-product-basket/" + product.id);
  },

  async [BasketActions.CREATE_ORDER]() {
    await $api.get("/order/create-order");
  },

  async [BasketActions.GET_ALL_ORDERS]() {
    return await $api.get("/order/all-orders");
  },

  async [BasketActions.GET_USER_ORDERS]() {
    return await $api.get("/order/user-orders");
  },

  async [BasketActions.CHANGE_ORDER_STATUS](context, body) {
    return await $api.post("/order/change-status", body);
  },
};
