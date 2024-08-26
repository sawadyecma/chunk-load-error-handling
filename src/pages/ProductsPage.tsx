import React from "react";
import { products } from "../domain/product";
import { generatePath } from "react-router-dom";
import { PATHS } from "../routes/path";

export const ProductsPage = () => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <a
            href={generatePath(PATHS.productDetail, {
              id: product.id.toString(),
            })}
          >
            {product.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
