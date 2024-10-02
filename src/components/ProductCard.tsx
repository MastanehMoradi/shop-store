import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { Product } from "../hooks/useProducts"
import getCroppedImage from "../services/image-url"
import { ProductTypeIcons } from "./ProductTypeIcons"
import { ProductScore } from "./ProductScore"


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
            <Heading fontSize='2xl'>{product.name}</Heading>
        </CardBody>
    </Card>
  )
}
