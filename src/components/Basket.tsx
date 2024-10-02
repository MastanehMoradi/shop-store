
import { Product } from "../hooks/useProducts";
import {
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { button } from "framer-motion/client";
import { ProductCardcontainer } from "./ProductCardcontainer";
import { ProductCard } from "./ProductCard";
import { FaCartPlus } from "react-icons/fa";
import { AddProductToBasket } from "./AddProductToBasket";


interface Props {
  products: Product[];
}

export const Basket = ({ products }: Props) => {

    console.log('in basket');

 products = [{
    id: 1, name: 'test', count: 2, score: 68,
    detail: "",
    category: "",
    backgroundImage: ""
}]
if (!products) return null;

return (
  <SimpleGrid
    columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
    spacing={6}
    padding="10px"
  >
    {products.map((product) => (
      <ProductCardcontainer key={product.id}>
        <ProductCard product={product}></ProductCard>
      </ProductCardcontainer>
    //   <AddProductToBasket count={product.count} onAddProduct={}></AddProductToBasket>
    //   <DeleteFromBasket></DeleteFromBasket>
    ))}
  </SimpleGrid>
);
};
