import useMovie from "../hooks/useMovie";
import { SimpleGrid, Button } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const Movis = () => {
  const { movie } = useMovie();
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
      {movie.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default Movis;
