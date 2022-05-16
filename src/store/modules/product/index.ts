import { Module } from "vuex";
import { RootState } from "@/store/types";
import { ProductState } from "@/store/modules/product/types";
import { getters } from "@/store/modules/product/getters";
import { mutations } from "@/store/modules/product/mutations";
import { actions } from "@/store/modules/product/actions";

export const product: Module<ProductState, RootState> = {
  state: {
    products: [],
    productsLoading: false,

    rowsOnPageCount: 10,
    allRowsCount: null,

    currentProduct: null,
  },
  getters,
  mutations,
  actions,
};
