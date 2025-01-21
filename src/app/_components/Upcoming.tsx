import { ChevronDown, Star } from "lucide-react";
import Link from "next/link";

export default async function Upcoming() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";

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

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Upcoming</h1>
        <Link href="/upcoming">See more...</Link>
      </div>
      <div className="flex flex-wrap max-w-[1280px] gap-[32px] m-auto">
        {data.results.slice(0, 10).map((movie: any, index: any) => {
          return (
            <div
              key={index}
              className="flex flex-col flex-wrap w-[230px] h-[439px] "
            >
              <img
                className=" w-[230px] h-[340px]"
                src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                alt=""
              />
              {movie?.original_title}

              <p className=" text-yellow-400 ">
                <Star className="fill-current h-4 mt-1" />
              </p>
              <p>{movie?.vote_average}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
