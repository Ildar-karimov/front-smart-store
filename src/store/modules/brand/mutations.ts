import { MutationTree } from "vuex";
import { Brand, BrandState } from "@/store/modules/brand/types";

export enum BrandMutations {
  SET_BRANDS = "SET_BRANDS",
}

export const mutations: MutationTree<BrandState> = {
  [BrandMutations.SET_BRANDS](state, brands: Brand[]) {
    state.brands = brands;
  },
};
