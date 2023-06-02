import { useParams } from "react-router-dom";
import useMovi from "../hooks/useMovi";
import { Heading } from "@chakra-ui/react";
const MovieDetailPage = () => {
  const { name } = useParams();
  const { data: shows } = useMovi(name!);
  return (
    <>
      <Heading>{shows?.data}</Heading>
    </>
  );
};

export default MovieDetailPage;
