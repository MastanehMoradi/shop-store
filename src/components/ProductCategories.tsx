import {
  Heading,
  HStack,
  ListItem,
  Image,
  List,
  Button,
} from "@chakra-ui/react";
import home from "../assets/home.webp";

interface Props {
  selectedType: string;
  onSelectType: (type: string) => void;
}

export const ProductCategories = ({ selectedType, onSelectType }: Props) => {
  const categories = ["home", "electric", "cosmetic"];
  if (!selectedType) selectedType = "default";

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Categories
      </Heading>
      <List>
        {categories.map((category) => (
          <ListItem key={category} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={home}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign="left"
                fontWeight={category === selectedType ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => onSelectType(category)}
              >
                {category}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
