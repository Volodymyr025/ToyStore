import FavoriteFillSVG from "@/assets/FavoriteFillSVG";
import Link from "next/link";

export default function Favorite() {
  return (
    <Link href={"/favorites"} className="flex ">
      <div className="relative cursor-pointer">
        <FavoriteFillSVG width="50" height="50" />
        <div className="w-5 h-5 absolute -bottom-1 -right-1 border-none rounded-full bg-blue-300 flex text-center justify-center items-center text-xs ">
          5
        </div>
      </div>
    </Link>
  );
}
