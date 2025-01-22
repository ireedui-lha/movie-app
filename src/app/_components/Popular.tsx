import { Star } from "lucide-react";
import Link from "next/link";

export default async function Popular() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);
  return (
    <div>
      <div className="flex justify-between ">
        <h1 className="text-3xl font-bold">Popular</h1>
        <button>
          <Link href="/popular">See more...</Link>{" "}
        </button>
      </div>

      <div className="flex flex-wrap max-w-[1280px] gap-[32px] m-auto  ">
        {data.results.slice(0, 10).map((movie: any, index: any) => {
          return (
            <div key={index} className="rounded-[20px] overflow-hidden">
              <img
                className="w-[230px] h-[300px] "
                src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                alt=""
              />
              <div className="  h-[79px] w-[230px]  bg-[#27272A]">
                <div className="flex">
                  <Star className="fill-current h-4 mt-1" />
                  <p>{movie?.vote_average}</p>
                </div>
                <p className=" font-bold"> {movie?.original_title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
