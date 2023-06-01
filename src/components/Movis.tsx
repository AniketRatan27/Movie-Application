import { useEffect, useState } from "react";
import axios from "axios";
import apiClient from "../services/api-client";

interface FetchMovie {
  id: number;
  name: string;
  language: string;
}

const Movis = () => {
  const [movie, setMovie] = useState<FetchMovie[]>([]);

  useEffect(() => {
    apiClient
      .get<FetchMovie[]>("https://api.tvmaze.com/shows")
      .then((res) => setMovie(res.data));
  });
  return (
    <ul>
      {movie.map((movie) => (
        <li key={movie.id}>{movie.name}</li>
      ))}
    </ul>
  );
};

export default Movis;
