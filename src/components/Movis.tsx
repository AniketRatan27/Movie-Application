import useMovie from "../hooks/useMovie";
import { SimpleGrid, HStack, flexbox, Button } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const Movis = () => {
  const { movie } = useMovie();
  return (
    <SimpleGrid columns={4} spacing={10}>
      {movie.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <Button bgColor="blue" marginTop="8px">
        Book Now
      </Button>
    </SimpleGrid>
  );
};

export default Movis;
