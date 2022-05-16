export interface ProductState {
  products: Product[];
  rowsOnPageCount: number;
  allRowsCount: number | null;
  productsLoading: boolean;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  count: number;
  additional_products: any;
  img: string;
  brandId: number;
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
