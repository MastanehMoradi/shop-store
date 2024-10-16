import { useQuery } from "@tanstack/react-query";
import { Product } from "../entities/Product";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Product>("/products");

const useProduct = (productId: string) => useQuery({
    queryKey: ["products", productId],
    queryFn: () => apiClient.get(productId),
  });

export default useProduct;
