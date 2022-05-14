import { GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { AuthState } from "@/store/modules/auth/types";

export const getters: GetterTree<AuthState, RootState> = {
  isAuthorized(state): boolean {
    return state.isAuthorized;
  },
  user(state) {
    return state.user;
  },
  userShortName(state): string {
    return `${state.user.name[0]}. ${state.user.surname}`;
  },
};
