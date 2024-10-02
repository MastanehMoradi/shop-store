import { Button, HStack } from "@chakra-ui/react";
import { button } from "framer-motion/client";
import { FaPlus } from "react-icons/fa6";

interface Props {
  count: number;
  onAddProduct: (count: number) => void;
  onDeleteProduct: (count: number) => void;
}

export const AddProductToBasket = ({
  count,
  onAddProduct,
  onDeleteProduct,
}: Props) => {
  return (
    <HStack>
      <Button
        as={button}
        leftIcon={<FaPlus />}
        onClick={() => onAddProduct(count + 1)}
      >
        count
      </Button>
      <Button
        as={button}
        rightIcon={<FaPlus />}
        onClick={() => onDeleteProduct(count - 1)}
      ></Button>
    </HStack>
  );
};
