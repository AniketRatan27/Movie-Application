import { Button, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { FetchMovie } from "../hooks/useMovie";

interface Props {
  movie: FetchMovie;
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Card margin="20px">
      <Image
        src={movie.image.original}
        height="300px"
        width="350px"
        borderRadius="10px"
      />
      <CardBody>
        <Heading>{movie.name}</Heading>
        <Text>{movie.language}</Text>
        <Text>{movie.rating.average}</Text>
      </CardBody>
      <Button bgColor="blue" marginTop="8px">
        Know More
      </Button>
    </Card>
  );
};

export default MovieCard;
