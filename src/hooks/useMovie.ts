import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


export interface FetchMovie {
    id: number;
    name: string;
    language: string;
    image:{
      original:string
    };
    rating:{
        average:number;
    }
  }
const useMovies=()=>{
    const [movie, setMovie] = useState<FetchMovie[]>([]);

    useEffect(() => {
      apiClient
        .get<FetchMovie[]>("https://api.tvmaze.com/shows")
        .then((res) => setMovie(res.data));
    },[]);
    return {movie};
}

export default useMovies;