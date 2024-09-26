import ShoppingCartSVG from "@/assets/ShoppingCartSVG";

export default function ShoppingCart() {
  return (
    <div className="flex">
      <div className="relative ">
        <ShoppingCartSVG />
        <div className="w-5 h-5 absolute -bottom-1 -right-1 border-none rounded-full bg-blue-300 flex text-center justify-center items-center text-xs ">
          5
        </div>
      </div>
    </div>
  );
}
