import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductPage } from "../pages/ProductPage";
import { PATHS } from "./path";

export const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <ProductsPage />,
  },
  {
    path: PATHS.products,
    element: <ProductsPage />,
  },
  {
    path: PATHS.productDetail,
    element: <ProductPage />,
  },
]);
