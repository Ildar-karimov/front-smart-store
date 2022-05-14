import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import $api from "@/api";
import {
  getAllProductsParams,
  ProductState,
} from "@/store/modules/product/types";
import { ProductMutations } from "@/store/modules/product/mutations";

export enum ProductActions {
  GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID",
  GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS",
  CREATE_PRODUCT = "CREATE_PRODUCT",
}

export const actions: ActionTree<ProductState, RootState> = {
  async [ProductActions.GET_ALL_PRODUCTS](
    context,
    params: getAllProductsParams
  ) {
    const res = await $api.get("/api/product", {
      params: params,
    });
    context.commit(ProductMutations.SET_PRODUCTS, res.data.rows);
    context.commit(ProductMutations.SET_ALL_ROWS_COUNT, res.data.count);
  },
};
