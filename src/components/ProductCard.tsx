import {
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { Product } from "../entities/Product";
import getCroppedImage from "../services/image-url";
import { ProductTypeIcons } from "./ProductTypeIcons";
import { ProductScore } from "./ProductScore";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { button, p } from "framer-motion/client";
import useSelectedProduct from "../SelectedProductStore";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {

  const selectedProductsBasket = useSelectedProduct((s)=> s.selectedProduct);
  const setSelectedProductsBasket = useSelectedProduct((s)=> s.setSelectedProductCount);
  const setSelectedProduct = useSelectedProduct((s)=> s.setSelectedProduct);


  function addToBasket(product: Product) {
    
   const curretProduct = selectedProductsBasket.filter(p => p.product.id === product.id);
    
    if(curretProduct.length===0){
     
      const selected = {
        product: product,
        count: 1
      }
      setSelectedProduct(selected)
    } else{
       
      setSelectedProductsBasket(curretProduct[0].product.id,curretProduct[0].count+1 );
    }
    
    // selectedProductsBasket.map(p=> {
    //   console.log("p.product.id= "+p.product.id);
    // })

  }

  return (
    <Card>
      <Image src={getCroppedImage(product.backgroundImage)}></Image>
      <CardBody>
        <HStack>
          <HStack>
            <ProductTypeIcons type={product.category} />
            <ProductScore score={product.score}></ProductScore>
          </HStack>
          <HStack marginLeft={10}>
            <Button as={button} rightIcon={<FaCartPlus />} onClick={()=>addToBasket(product)}></Button>
          </HStack>
        </HStack>

        <Heading fontSize="2xl">
          <Link to={"/products/" + product.id}>{product.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};
