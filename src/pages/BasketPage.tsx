import { Button, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

import useSelectedProduct from "../SelectedProductStore";
import { ProductCardcontainer } from "../components/ProductCardcontainer";
import { ProductCard } from "../components/ProductCard";

export const BasketPage = () => {
  const selectedProductsBasket = useSelectedProduct((s)=> s.selectedProduct);
  const setSelectedProductsBasket = useSelectedProduct((s)=> s.setSelectedProductCount);
 

  if (!selectedProductsBasket) return null;

  selectedProductsBasket.map((productInBasket) => {
    
  console.log('productInBasket.product.id='+productInBasket.product.id);
  console.log('productInBasket.count='+productInBasket.count);
  
  })

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {selectedProductsBasket.map((productInBasket) => (
      
        <GridItem>
        <ProductCardcontainer key={productInBasket.product.id}>
          <ProductCard product={productInBasket.product}></ProductCard>
        </ProductCardcontainer>
        <Button  onClick={()=> {setSelectedProductsBasket(productInBasket.product.id,productInBasket.count+1)}}>+</Button>
        <Text fontSize='medium'> {productInBasket.product.count}</Text>
        <Button  onClick={()=> {setSelectedProductsBasket(productInBasket.product.id,productInBasket.count-1)}}>-</Button>
        </GridItem>
       
      ))}
    </SimpleGrid>
  );
};
