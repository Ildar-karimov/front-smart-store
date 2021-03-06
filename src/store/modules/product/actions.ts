import { ActionTree } from "vuex";
import { Loading, RootState } from "@/store/types";
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
  async [ProductActions.CREATE_PRODUCT](context, product) {
    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      if (Array.isArray(product[key])) {
        formData.append(key, JSON.stringify(product[key]));
      } else formData.append(key, product[key]);
    });

    await $api.post("/product/create", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  async [ProductActions.GET_ALL_PRODUCTS](
    context,
    params: getAllProductsParams
  ) {
    context.state.productsLoading = Loading.LOADING;
    const res = await $api.get("/product", {
      params: params,
    });
    context.commit(ProductMutations.SET_PRODUCTS, res.data.rows);
    context.commit(ProductMutations.SET_ALL_ROWS_COUNT, res.data.count);
  },

  async [ProductActions.GET_PRODUCT_BY_ID](context, id) {
    context.state.currentProductLoading = Loading.LOADING;
    const res = await $api.get(`/product/${id}`);
    context.commit(ProductMutations.SET_CURRENT_PRODUCT, res.data);
  },
};
