export interface ProductState {
  products: Product[];
  rowsOnPageCount: number;
  allRowsCount: number | null;
  productsLoading: number;
  currentProduct: currentProduct | null;
  currentProductLoading: number;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  count: number;
  img: string;
  brandId: number;
};

export type currentProduct = {
  id: number;
  name: string;
  price: number;
  count: number;
  img: string;
  brandId: number;
  additionalProducts: Product[],
  info: any,
};

export type getAllProductsParams = {
  orderBy: string;
  order: string;
  brandId: string;
  rowsOnPageCount: number;
  currentPage: number;
  startPrice: number | null;
  endPrice: number | null;
};
