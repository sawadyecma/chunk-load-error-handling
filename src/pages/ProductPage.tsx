import { useParams } from "react-router-dom";
import { products } from "../domain/product";
import React from "react";

export const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  if (!product) return <>Not Found</>;

  return (
    <div>
      <h2>{product.name}</h2>
    </div>
  );
};
