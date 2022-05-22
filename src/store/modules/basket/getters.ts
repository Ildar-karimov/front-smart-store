import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { BasketState } from "@/store/modules/basket/types";
import { Product } from "@/store/modules/product/types";

export const getters: GetterTree<BasketState, RootState> = {
  basketProducts(state): Product[] {
    return state.basketProducts;
  },
  basketProductsCount(state): number {
    return state.basketProducts.length;
  },
  basketProductsLoading(state): number {
    return state.basketProductsLoading;
  },
};
