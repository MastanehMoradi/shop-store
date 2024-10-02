import React from 'react'
import { ProductQuery } from '../App'
import { Heading } from '@chakra-ui/react'


interface Props{
    productQuery: ProductQuery
}
export const ProductHeading = ({productQuery}: Props) => {
    const heading = `${productQuery.productCategory || ''} ${productQuery.searchText || ''} Products`
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}
