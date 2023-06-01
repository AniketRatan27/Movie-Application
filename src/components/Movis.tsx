import { useEffect, useState } from "react";
import useMovie from "../hooks/useMovie";

const Movis = () => {
  const { movie } = useMovie();
  return (
    <ul>
      {movie.map((movie) => (
        <li key={movie.id}>{movie.name}</li>
      ))}
    </ul>
  );
};

export default Movis;
