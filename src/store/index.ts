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
import { auth } from "@/store/modules/auth";
import { product } from "@/store/modules/product";
import { brand } from "@/store/modules/brand";

const store: StoreOptions<RootState> = {
  state: {
    hello: "test",
  },
  modules: {
    auth,
    product,
    brand,
  },
};

export default new Vuex.Store<RootState>(store);
