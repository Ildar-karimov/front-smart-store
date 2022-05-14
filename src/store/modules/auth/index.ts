import { Module } from "vuex";
import { RootState } from "@/store/types";
import { AuthState } from "@/store/modules/auth/types";
import { getters } from "@/store/modules/auth/getters";
import { mutations } from "@/store/modules/auth/mutations";
import { actions } from "@/store/modules/auth/actions";

export const auth: Module<AuthState, RootState> = {
  state: {
    isAuthorized: false,
    user: {
      id: 0,
      name: "",
      surname: "",
      email: "",
      roles: [],
    },
  },
  getters,
  mutations,
  actions,
};
