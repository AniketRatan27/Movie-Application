import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  transition,
} from "@chakra-ui/react";
import { FetchMovie } from "../hooks/useMovie";
import { Link } from "react-router-dom";
import { easeOut, transform } from "framer-motion";

interface Props {
  movie: FetchMovie;
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Card
      margin="20px"
      height="500px"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .20s ease-in",
      }}
    >
      <Image
        src={movie.image.original}
        height="290px"
        width="350px"
        borderRadius="10px"
      />
      <CardBody>
        <Heading>{movie.name}</Heading>
        <Text>{movie.language}</Text>
        <Text>{movie.rating.average}</Text>
        <Link to={"/shows/" + movie.name}>
          <Button bgColor="blue" marginTop="8px">
            Know More
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
