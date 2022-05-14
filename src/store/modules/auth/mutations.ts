import { MutationTree } from "vuex";
import { AuthState } from "@/store/modules/auth/types";

export enum AuthMutations {
  SET_IS_AUTHORIZED = "SET_IS_AUTHORIZED",
  SET_USER = "SET_USER",
}

export const mutations: MutationTree<AuthState> = {
  [AuthMutations.SET_IS_AUTHORIZED](state, payload: boolean) {
    state.isAuthorized = payload;
  },
  [AuthMutations.SET_USER](state, user) {
    state.user = user;
  },
};
