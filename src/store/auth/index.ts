import { Module } from "vuex";
import { RootState } from "@/store/types";
import { AuthState } from "@/store/auth/types";
import { getters } from "@/store/auth/getters";
import { mutations } from "@/store/auth/mutations";
import { actions } from "@/store/auth/actions";

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
