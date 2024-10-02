import { ProductQuery } from "../App";
import useData from "./useData";


export interface Product {
    
    id: number,
    name: string,
    detail: string,
    category: string;
    backgroundImage: string,
    score: number,
    count: number
}

const useProduct = (productQuery: ProductQuery) =>
    useData<Product> ('/products',
        {
            params:{
              search: productQuery.searchText,
              category: productQuery.productCategory,
              sort: productQuery.sortOrder
            }
        },
        [productQuery]
    ) ;

    export default useProduct;