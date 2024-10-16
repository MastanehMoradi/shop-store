import { useInfiniteQuery } from "@tanstack/react-query";
import { Product } from "../entities/Product";
import useProductQuery from "../store";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Product>("/products");

const useProducts = () => {
  const productQuery = useProductQuery((s) => s.productQuery);
 
  


  return useInfiniteQuery<FetchResponse<Product>, Error>({
    queryKey: ["products", productQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        // params: {
        //   search: productQuery?.searchText,
        //   category: productQuery?.productCategory,
        //   sort: productQuery?.sortOrder,
        //   page: pageParam,
        // },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms("24h"),
  });

  // return useData<Product>(
  //   "/products",
  //   {
  //     params: {
  //       search: productQuery.searchText,
  //       category: productQuery.productCategory,
  //       sort: productQuery.sortOrder,
  //     },
  //   },
  //   [productQuery]
  // );
}

export default useProducts;
