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
};
