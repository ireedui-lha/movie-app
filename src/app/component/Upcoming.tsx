"use client";

import { useEffect, useState } from "react";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  original: string;
  id: number;
  genre_ids: [];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  video: "false" | "true";
  vote_average: number;
  release_date: string;
};
export default function Upcoming() {
  const [movies, setMovies] = useState<MovieType[] | undefined>();
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
  const getMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    if (data?.results) {
      setMovies(data.results);
    }
  };

  useEffect(() => {
    getMovie();
    console.log("getting movie");
  }, []);
  return (
    <div className="flex flex-col gap-5">
      {movies?.map((movie, index) => {
        return (
          <div key={index} className="">
            <img
              className="h-[340px] w-[230px]  "
              src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
              alt=""
            />
            <p>{movie?.vote_average}</p>
            {movie?.original_title}
          </div>
        );
      })}
    </div>
  );
}
