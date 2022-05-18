import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { LikedProductState } from "@/store/modules/likedProduct/types";

export const getters: GetterTree<LikedProductState, RootState> = {
  likedProducts(state) {
    return state.likedProducts;
  },
};
