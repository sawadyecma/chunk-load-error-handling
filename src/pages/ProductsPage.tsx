import React from "react";
import { products } from "../domain/product";
import { generatePath } from "react-router-dom";
import { PATHS } from "../routes/path";

console.log("ProductsPage loaded!");

export const ProductsPage = () => {
  return (
    <main>
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
      <a href={PATHS.cart}>カートへ</a>
      <a href={PATHS.profile}>プロフィールへ</a>
    </main>
  );
};

export default ProductsPage;
