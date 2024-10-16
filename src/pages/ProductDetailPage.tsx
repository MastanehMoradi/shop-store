import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom'
import { ExpandableText } from '../components/ExpandableText';
import { ProductAttributes } from '../components/ProductAttributes';
import { ProductTrailer } from '../components/ProductTrailer';
import { ProductScreenshot } from '../components/ProductScreenshot';
import useProduct from '../hooks/useProduct';


export const ProductDetailPage = () => {

    const {productId} =  useParams();
    const {data: product, error, isLoading} = useProduct(productId!);

    if(isLoading) return <Spinner/>;
    if(error || !product) return;
 
  return (
    <SimpleGrid columns={{base:1, md:2}}  spacing={5}>
        <GridItem>
            <Heading>{product.name}</Heading>
            <ExpandableText>{product.detail}</ExpandableText>
            <ProductAttributes product={product}></ProductAttributes>
        </GridItem>
        <GridItem>
            <ProductTrailer productId={product.id}></ProductTrailer>
            <ProductScreenshot productId={product.id}></ProductScreenshot>
        </GridItem>
    </SimpleGrid>
  )
     
}
