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
};
