import {
  Heading,
  HStack,
  ListItem,
  Image,
  List,
  Button,
} from "@chakra-ui/react";
import home from "../assets/home.webp";
import power from "../assets/power.webp";
import cosmetic from "../assets/cusmetic.webp"
import useProductQuery from "../store";

export const ProductCategories = () => {
  const categories = [
    {key:'home', value: home },
    {key:'electric', value: power },
    {key:'cosmetic', value: cosmetic },
    {key:'Sanitery', value: cosmetic },
    {key:'Healthcare', value: cosmetic },
    {key:'Furnish', value: home },
  ]
  //["home", "electric", "cosmetic"];

  const selectedCategory = useProductQuery(
    (s) => s.productQuery.productCategory
  );
  const setSelectedCategory = useProductQuery((s) => s.setProductCategory);

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Categories
      </Heading>
      <List>
        {categories.map((category) => (
          <ListItem key={category.key} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={category.value}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign="left"
                fontWeight={category.key === selectedCategory ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.key}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
