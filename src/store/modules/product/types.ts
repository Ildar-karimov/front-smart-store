export interface ProductState {
  products: Product[];
  rowsOnPageCount: number;
  allRowsCount: number | null;
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
  brandId: string;
  rowsOnPageCount: number;
  currentPage: number,
};
