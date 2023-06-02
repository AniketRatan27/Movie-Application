import { Heading, Text, Box } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />

      <Box padding={8}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page doesn't exist"
            : "Some Unexpected Error occurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
