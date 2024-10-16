import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading> Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "The page does not exist."
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};
