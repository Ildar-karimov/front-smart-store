import { MutationTree } from "vuex";
import {
  currentProduct,
  Product,
  ProductState,
} from "@/store/modules/product/types";
import { Loading } from "@/store/types";

export enum ProductMutations {
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_ALL_ROWS_COUNT = "SET_ALL_ROWS_COUNT",
  SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT",
}

export const mutations: MutationTree<ProductState> = {
  [ProductMutations.SET_PRODUCTS](state, products: Product[]) {
    state.products = products;
    state.productsLoading = Loading.LOADING_DONE;
  },
  [ProductMutations.SET_ALL_ROWS_COUNT](state, count: number) {
    state.allRowsCount = count;
  },
  [ProductMutations.SET_CURRENT_PRODUCT](state, product: currentProduct) {
    state.currentProduct = product;
    state.currentProductLoading = Loading.LOADING_DONE;
  },
};
