"use client";
import { ProductsType } from "@/types/products.types";

interface CardProps {
  products: [];
}

export default function Card({ products }: CardProps) {
  return (
    <div>
      <h2>dde</h2>
      {products.map((product: ProductsType) => (
        <div key={product.id}>
          <h5>{product.Title}</h5>
          <p>{product.Description}</p>
        </div>
      ))}
    </div>
  );
}
