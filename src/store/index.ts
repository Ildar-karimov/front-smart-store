import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/store/types";
import { auth } from "@/store/modules/auth";
import { product } from "@/store/modules/product";
import { brand } from "@/store/modules/brand";
import { likedProduct } from "@/store/modules/likedProduct";
import { basket } from "@/store/modules/basket";

const store: StoreOptions<RootState> = {
  state: {
    hello: "test",
  },
  modules: {
    auth,
    product,
    brand,
    likedProduct,
    basket,
  },
};

export default new Vuex.Store<RootState>(store);
