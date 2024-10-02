import { Button, HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
import { SortProduct } from "./SortProduct";
import { FaCartPlus } from "react-icons/fa";
import { Basket } from "./Basket";
import { Product } from "../hooks/useProducts";
import { AddNewProduct } from "./AddNewProduct";
import { button } from "framer-motion/client";

interface Props {
    onSearch: (searchText: string)=> void;
    onSortProduct: (filterText: string)=> void;
    sortOrder: string;
    products: Product[];
}

export const NavBar = ({onSearch, onSortProduct,sortOrder, products }: Props) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SearchInput onSearch={onSearch}></SearchInput>
        <SortProduct onSortProduct={onSortProduct} sortOrder={sortOrder}></SortProduct>
        {/* <Basket products={products}></Basket> */}
        <Button
      as={button}
      rightIcon={<FaCartPlus />}
      onClick={() => <Basket products={pr}/>}
    >
      Basket
    </Button>
        {/* <Button onClick={()=> <AddNewProduct></AddNewProduct>}>Add New Product</Button> */}
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}
