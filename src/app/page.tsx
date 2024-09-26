import Favorite from "@/components/favorite/Favorite";
import Products from "@/components/products/Products";
import ShoppingCart from "@/components/shopping-cart/ShoppingCart";

export default function Home() {
  return (
    <div>
      <div className="flex space-x-5">
        <ShoppingCart />
        <Favorite />
      </div>
      <Products />
    </div>
  );
}
