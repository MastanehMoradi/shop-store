import { create } from "zustand";
import { SelectedProduct } from "./entities/SelectedProducts";

interface SelectedProductInBasket {
  selectedProduct: SelectedProduct[];
  setSelectedProductCount: (productId: number, count: number) => void;
}

const useSelectedProduct = create<SelectedProductInBasket>((set) => ({
  selectedProduct: [
    {
      product: {
        id: 0,
        name: "",
        detail: "",
        category: "",
        backgroundImage: "",
        score: 0,
        count: 0,
      },
      count: 0,
    },
  ],
  setSelectedProductCount: (productId, count) => {
    if (count === 0) {
      set((store) => ({
        selectedProduct: store.selectedProduct.filter(
          (p) => p.product.id !== productId
        ),
      }));
    } else {
      set((store) => ({
        selectedProduct: store.selectedProduct.map((p) =>
          p.product.id === productId ? { ...p, count: count } : p
        ),
      }));
    }
  },
}));

export default useSelectedProduct;
