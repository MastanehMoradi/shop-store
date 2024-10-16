import { create } from "zustand";

 interface ProductQuery {
  searchText?: string;
  sortOrder?: string;
  productCategory?: string;
  productId?: number;
}

 interface ProductQueryStore {
  productQuery: ProductQuery;
  setSearchText: (serarchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setProductCategory: (producCategory: string) => void;
  setProductId: (productId: number) => void;
}

const useProductQuery = create<ProductQueryStore>((set) => ({
  productQuery: {},
  setSearchText: (searchText) => set(() => ({ productQuery: { searchText } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      productQuery: { ...store.productQuery, sortOrder },
    })),
  setProductCategory: (productCategory) =>
    set((store) => ({
      productQuery: { ...store.productQuery, productCategory },
    })),
  setProductId: (productId) =>
    set((store) => ({ productQuery: { ...store.productQuery, productId } })),
}));


export default useProductQuery;