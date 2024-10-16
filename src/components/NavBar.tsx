import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

import { Link } from "react-router-dom";
import { button } from "framer-motion/client";
import { FaCartPlus } from "react-icons/fa";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px"></Image>
      </Link>
      <SearchInput></SearchInput>
      <Link to="/basket">
      <Button
          as={button}
          rightIcon={<FaCartPlus />}>
        </Button>
      </Link>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
