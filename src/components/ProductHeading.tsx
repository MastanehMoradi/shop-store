import { Heading } from "@chakra-ui/react";
import useProductQuery from "../store";

export const ProductHeading = () => {
  const productCategory = useProductQuery(
    (s) => s.productQuery.productCategory
  );
  const searchText = useProductQuery((s) => s.productQuery.searchText);

  const heading = `${productCategory || ""} ${searchText || ""} Products`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
