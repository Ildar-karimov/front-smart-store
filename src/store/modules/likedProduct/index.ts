import { Module } from "vuex";
import { RootState } from "@/store/types";
import { LikedProductState } from "@/store/modules/likedProduct/types";
import { getters } from "@/store/modules/likedProduct/getters";
import { mutations } from "@/store/modules/likedProduct/mutations";

export const likedProduct: Module<LikedProductState, RootState> = {
  state: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    likedProducts: JSON.parse(localStorage.getItem("likedProducts")) || [],
  },
  getters,
  mutations,
};
