import { useState } from "react";
import "./App.css";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Product } from "./hooks/useProducts";
import { ProductCategories } from "./components/ProductCategories";
import { ProductHeading } from "./components/ProductHeading";
import { ProductGrid } from "./components/ProductGrid";

export interface ProductQuery {
  searchText: string;
  sortOrder: string;
  productCategory: string;
  products: Product[];
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) =>
            setProductQuery({ ...productQuery, searchText })
          }
          onSortProduct={(sortOrder) =>
            setProductQuery({ ...productQuery, sortOrder })
          }
          sortOrder={productQuery.sortOrder}
          products={productQuery.products}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5} >
          <ProductCategories
            selectedType={productQuery.productCategory}
            onSelectType={(selectedProduct) =>
              setProductQuery({ ...productQuery, productCategory: selectedProduct })
            }
          ></ProductCategories>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <ProductHeading productQuery={productQuery}></ProductHeading>
        </Box>
        <Flex marginBottom={5}>
          <ProductGrid productQuery={productQuery}></ProductGrid>
        </Flex>

      </GridItem>
    </Grid>
  );
}

export default App;
