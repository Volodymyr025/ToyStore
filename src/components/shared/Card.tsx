"use client";
import CartSVG from "@/assets/CartSVG";
import FavoriteFillSVG from "@/assets/FavoriteFillSVG";
import FavoriteSVG from "@/assets/FavoriteSVG";
import { ProductsType } from "@/types/products.types";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CardProps {
  products: [];
}

export default function Card({ products }: CardProps) {
  const [productsId, setProductsId] = useState<string[]>([]);

  const favoriteHandling = (id: string) => {
    if (productsId.includes(id)) {
      const updatedIds = productsId.filter((el) => el !== id);
      setProductsId(updatedIds);
      localStorage.setItem("favoriteId", JSON.stringify(updatedIds));
    } else {
      const updatedIds = [...productsId, id];
      setProductsId(updatedIds);
      localStorage.setItem("favoriteId", JSON.stringify(updatedIds));
    }
  };

  useEffect(() => {
    const localIds = JSON.parse(localStorage.getItem("favoriteId") || "[]");
    return setProductsId(localIds);
  }, []);

  return (
    <ul className="flex my-10">
      {products.map((product: ProductsType) => {
        return (
          <li
            key={product.id}
            className="w-56 p-4 m-4 border border-solid rounded-lg border-red-600 flex flex-col relative"
          >
            <div
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => favoriteHandling(product.id)}
            >
              {productsId.includes(product.id) ? (
                <div className="hover:scale-125 transition">
                  <FavoriteFillSVG width="20" height="20" />
                </div>
              ) : (
                <div className="hover:scale-125 transition">
                  <FavoriteSVG />
                </div>
              )}
            </div>
            <Image
              className="p-2 mx-auto"
              src={`https://strapi-toy-store.onrender.com${product.img[0].url}`}
              alt={product.title}
              width={150}
              height={150}
            />

            <h5 className="text-base font-bold text-center">{product.title}</h5>
            <p className="text-center content-end flex-1">
              <span className="font-bold text-xl">{product.price}</span> грн
            </p>
            <div className="flex justify-end cursor-pointer ">
              <div className="hover:scale-150 transition">
                <CartSVG />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
