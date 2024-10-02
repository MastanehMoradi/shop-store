import { SimpleGrid, Text } from "@chakra-ui/react";
import { ProductQuery } from "../App"
import useProduct from "../hooks/useProducts";
import { ProductCardcontainer } from "./ProductCardcontainer";
import { ProductCard } from "./ProductCard";
import { ProductGameSkleton } from "./ProductGameSkleton";


interface Props{
    productQuery: ProductQuery;
}

export const ProductGrid = ({productQuery}: Props) => {

    const {data, error, isLoading} = useProduct(productQuery);
    const skletons = [1,2,3,4,5,6];

  
    if(error) return <Text>{error}</Text>

  return (
    <SimpleGrid
    columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
    spacing={6}
    padding="10px"
  >
    {isLoading && skletons.map( (skleton) => (
        <ProductCardcontainer key={skleton}>
            <ProductGameSkleton/>
        </ProductCardcontainer>
    ))}

    {data.map((product) => (
      <ProductCardcontainer key={product.id}>
        <ProductCard product={product}></ProductCard>
      </ProductCardcontainer>
    ))}
  </SimpleGrid>
  )
}
