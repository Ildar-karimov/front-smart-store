import { MutationTree } from "vuex";
import { Product, ProductState } from "@/store/modules/product/types";

export enum ProductMutations {
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_ALL_ROWS_COUNT = "SET_ALL_ROWS_COUNT",
}

export const mutations: MutationTree<ProductState> = {
  [ProductMutations.SET_PRODUCTS](state, products: Product[]) {
    state.products = products;
  },
  [ProductMutations.SET_ALL_ROWS_COUNT](state, count: number) {
    state.allRowsCount = count;
  },
};
