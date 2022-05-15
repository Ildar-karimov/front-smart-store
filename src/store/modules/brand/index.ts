import { Module } from "vuex";
import { RootState } from "@/store/types";
import { getters } from "@/store/modules/brand/getters";
import { mutations } from "@/store/modules/brand/mutations";
import { actions } from "@/store/modules/brand/actions";
import { BrandState } from "@/store/modules/brand/types";

export const brand: Module<BrandState, RootState> = {
  state: {
    brands: [],
  },
  getters,
  mutations,
  actions,
};
