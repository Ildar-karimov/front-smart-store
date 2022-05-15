import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import $api from "@/api";
import { BrandState } from "@/store/modules/brand/types";
import { BrandMutations } from "@/store/modules/brand/mutations";

export enum BrandActions {
  GET_ALL_BRANDS = "GET_ALL_BRANDS",
}

export const actions: ActionTree<BrandState, RootState> = {
  async [BrandActions.GET_ALL_BRANDS](context) {
    const res = await $api.get("/brand");
    context.commit(BrandMutations.SET_BRANDS, res.data);
  },
};
