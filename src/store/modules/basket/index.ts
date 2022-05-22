import { Module } from "vuex";
import { Loading, RootState } from "@/store/types";
import { getters } from "@/store/modules/basket/getters";
import { mutations } from "@/store/modules/basket/mutations";
import { actions } from "@/store/modules/basket/actions";
import { BasketState } from "@/store/modules/basket/types";

export const basket: Module<BasketState, RootState> = {
  state: {
    basketProducts: [],
    basketProductsLoading: Loading.LOADING_INIT,
  },
  getters,
  mutations,
  actions,
};
