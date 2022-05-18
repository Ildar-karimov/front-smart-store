import { MutationTree } from "vuex";
import { LikedProductState } from "@/store/modules/likedProduct/types";

export enum LikedProductMutations {
  ADD_LIKED_PRODUCT = "ADD_LIKED_PRODUCT",
  DELETE_LIKED_PRODUCT = "DELETE_LIKED_PRODUCT",
}

export const mutations: MutationTree<LikedProductState> = {
  [LikedProductMutations.ADD_LIKED_PRODUCT](state, product) {
    state.likedProducts.push(product);
    localStorage.setItem("likedProducts", JSON.stringify(state.likedProducts));
  },
  [LikedProductMutations.DELETE_LIKED_PRODUCT](state, product) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    state.likedProducts.forEach((likedProduct, index) => {
      if (product.id === likedProduct?.id) {
        state.likedProducts.splice(index, 1);
      }
    });
    localStorage.setItem("likedProducts", JSON.stringify(state.likedProducts));
  },
};
