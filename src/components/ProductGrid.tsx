import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import { ProductCardcontainer } from "./ProductCardcontainer";
import { ProductCard } from "./ProductCard";
import { ProductGameSkleton } from "./ProductGameSkleton";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import { Product } from "../entities/Product";

export const ProductGrid = () => {



  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useProducts();
  const skletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  // data?.pages.map((page, index) =>{
  //   console.log('index='+index);
  //   page.results.map((product: Product) =>{
  //     console.log('product= '+product);
  //   })
  // });

  const fetchedProductCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Box padding="10px">
      <InfiniteScroll
        dataLength={fetchedProductCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding="10px"
        >
          {isLoading &&
            skletons.map((skleton) => (
              <ProductCardcontainer key={skleton}>
                <ProductGameSkleton />
              </ProductCardcontainer>
            ))}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((product: Product) => (
                <ProductCardcontainer key={product.id}>
                  <ProductCard product={product}></ProductCard>
                </ProductCardcontainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};
