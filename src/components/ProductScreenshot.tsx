import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
 

interface Props{
    productId: number;
}


export const ProductScreenshot = ({productId}: Props) => {

    const { data, error, isLoading } = useScreenshots(productId);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{base:1, md:2}} spacing={2}>
       {data?.map((file) => (
         <Image key={file.id} src={file.image}></Image>
       ))}
    </SimpleGrid>
  )
}
