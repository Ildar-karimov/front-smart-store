import { ActionTree } from "vuex";
import {
  AuthState,
  LoginBody,
  RegistrationBody,
} from "@/store/modules/auth/types";
import { RootState } from "@/store/types";
import $api, { API_URL } from "@/api";
import { AuthMutations } from "@/store/modules/auth/mutations";
import axios from "axios";

export enum AuthActions {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  REFRESH = "REFRESH",
  REGISTRATION = "REGISTRATION",
  CHECK_AUTH = "CHECK_AUTH",
  SEND_TEST_DATA = "SEND_TEST_DATA",
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
    const res = await $api.post("/user/registration", data);
    context.commit(AuthMutations.SET_IS_AUTHORIZED, true);
    localStorage.setItem("token", res.data.accessToken);
    context.commit(AuthMutations.SET_USER, res.data.user);
  },

  async [AuthActions.CHECK_AUTH](context) {
    const res = await axios.get(`${API_URL}/user/refresh`, {
      withCredentials: true,
    });
    context.commit(AuthMutations.SET_IS_AUTHORIZED, true);
    localStorage.setItem("token", res.data.accessToken);
    context.commit(AuthMutations.SET_USER, res.data.user);
  },

  async [AuthActions.SEND_TEST_DATA](context, body) {
    return await $api.post("/user/save-test", body);
  },
};
