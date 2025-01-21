import { Sun } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between sticky top-0">
      <img src="./film.png" alt="" />
      <h1 className="text-[#4338CA]">Movie Z</h1>
      <div></div>
      <button>Genre</button>
      <input className="border-2" type="text" placeholder="Search" />
      <Sun />
    </div>
  );
}
