// import { createStore } from "vuex";
//
// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/store/types";
import { auth } from "@/store/auth";

const store: StoreOptions<RootState> = {
  state: {
    hello: "test",
  },
  modules: {
    auth,
  },
};

export default new Vuex.Store<RootState>(store);
