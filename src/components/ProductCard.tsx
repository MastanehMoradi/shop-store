import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { Product } from "../entities/Product"
import getCroppedImage from "../services/image-url"
import { ProductTypeIcons } from "./ProductTypeIcons"
import { ProductScore } from "./ProductScore"
import { Link } from "react-router-dom"


interface Props {
    product:  Product
}

export const ProductCard = ({product}: Props) => {
  return (
    
    <Card>
        <Image src={getCroppedImage(product.backgroundImage)}></Image>
        <CardBody>
            <HStack>
                <ProductTypeIcons type={product.category} />
                <ProductScore score={product.score}></ProductScore>
            </HStack>
            <Heading fontSize='2xl'><Link to={'/products/'+product.id}>{product.name}</Link></Heading>
        </CardBody>
    </Card>
  )
}
