import { SimpleGrid, Text } from "@chakra-ui/react";
import { Product } from "../entities/Product"
import { DefinitionItem } from "./DefinitionItem";

interface Props{
    product: Product;
}

export const ProductAttributes = ({product}: Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>
        <DefinitionItem term='Category'>
            <Text key ={product.id}>{product.category}</Text>
        </DefinitionItem>
        <DefinitionItem term='Score'>
            <Text key ={product.id}>{product.score}</Text>
        </DefinitionItem>
    </SimpleGrid>
  )
}
