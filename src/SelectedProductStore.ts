import { create } from "zustand";
import { SelectedProduct } from "./entities/SelectedProducts";

interface SelectedProductInBasket {
  selectedProduct: SelectedProduct[];
  setSelectedProduct: (selectedProduct:SelectedProduct )=>void;
  setSelectedProductCount: (productId: number, count: number) => void;
}

const useSelectedProduct = create<SelectedProductInBasket>((set) => ({
  selectedProduct: [],
  setSelectedProduct: (selectedProduct) =>{
   
    set((store) => ({
      selectedProduct: [selectedProduct, ...store.selectedProduct]
    }))
  },

  setSelectedProductCount: (productId, count) => {
    console.log('productId='+productId);
    console.log('count='+count);
    if (count === 0) {
      set((store) => ({
        selectedProduct: store.selectedProduct.filter(
          (p) => p.product.id !== productId
        ),
      }));
    } else {
      
      set((store) => ({
        selectedProduct: store.selectedProduct.map((p) =>
          p.product.id === productId ? { ...p, count: count } : p)
      }));
    }
  },
}));

export default useSelectedProduct;
