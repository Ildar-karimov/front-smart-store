import {Product} from "@/store/modules/product/types";

export interface BasketState {
  basketProducts: Product[];
  basketProductsLoading: number;
}

