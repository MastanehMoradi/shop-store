import { Box, Button, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { ProductCategories } from "../components/ProductCategories";
import { ProductGrid } from "../components/ProductGrid";
import { ProductHeading } from "../components/ProductHeading";
import { SortProduct } from "../components/SortProduct";
import { MdOutlineAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <ProductCategories></ProductCategories>
        </GridItem>
      </Show>
      <GridItem area="main">
        <SortProduct></SortProduct>
        <Link to="/add">
          <Button rightIcon={<MdOutlineAddCircle />}></Button>
        </Link>

        <Box paddingLeft={2}>
          <ProductHeading></ProductHeading>
        </Box>
        <Flex marginBottom={5}>
          <ProductGrid></ProductGrid>
        </Flex>
      </GridItem>
    </Grid>
  );
};
