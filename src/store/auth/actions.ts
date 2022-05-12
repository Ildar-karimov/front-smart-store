import { ActionTree } from "vuex";
import { AuthState, LoginBody, RegistrationBody } from "@/store/auth/types";
import { RootState } from "@/store/types";
import $api from "@/api";
import { AuthMutations } from "@/store/auth/mutations";

export enum AuthActions {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  REFRESH = "REFRESH",
  REGISTRATION = "REGISTRATION",
}

export const actions: ActionTree<AuthState, RootState> = {
  async [AuthActions.LOGIN](context, data: LoginBody) {
    const res = await $api.post("/user/login", data);
    context.commit(AuthMutations.SET_IS_AUTHORIZED, true);
    localStorage.setItem("token", res.data.accessToken);
    context.commit(AuthMutations.SET_USER, res.data.user);
  },
  async [AuthActions.LOGOUT](context) {
    await $api.post("/user/logout");
    localStorage.removeItem("token");
    context.commit(AuthMutations.SET_IS_AUTHORIZED, false);
  },
  async [AuthActions.REGISTRATION](context, data: RegistrationBody) {
    await $api.post("/user/registration", data);
  },
};
