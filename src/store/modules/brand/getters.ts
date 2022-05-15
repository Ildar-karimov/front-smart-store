import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { Brand, BrandState } from "@/store/modules/brand/types";

export const getters: GetterTree<BrandState, RootState> = {
  brands(state): Brand[] {
    return state.brands;
  },
};
