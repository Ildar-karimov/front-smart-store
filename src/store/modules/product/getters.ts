import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { Product, ProductState } from "@/store/modules/product/types";

export const getters: GetterTree<ProductState, RootState> = {
  products(state): Product[] {
    return state.products;
  },
  rowsOnPageCount(state): number {
    return state.rowsOnPageCount;
  },
  allRowsCount(state): number | null {
    return state.allRowsCount;
  },
  productsLoading(state): number {
    return state.productsLoading;
  },
  currentProduct(state): Product | null {
    return state.currentProduct;
  },
  currentProductLoading(state): number {
    return state.currentProductLoading;
  },
};
