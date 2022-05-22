import { MutationTree } from "vuex";
import { Product } from "@/store/modules/product/types";
import { BasketState } from "@/store/modules/basket/types";

export enum BasketMutations {
  SET_BASKET_PRODUCTS = "SET_BASKET_PRODUCTS",
}

export const mutations: MutationTree<BasketState> = {
  [BasketMutations.SET_BASKET_PRODUCTS](state, products: Product[]) {
    state.basketProducts = products;
  },
};
