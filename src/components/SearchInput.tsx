import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useProductQuery from "../store";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchTest = useProductQuery((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchTest(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup width="500px">
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Product..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};
