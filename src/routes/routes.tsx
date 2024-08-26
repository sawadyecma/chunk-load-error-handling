import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "./path";
import { lazy } from "react";
import { AppErrorBoundary } from "../basis/ErrorBoundary";

const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const CartPage = lazy(() => import("../pages/CartPage"));

export const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: (
      <AppErrorBoundary>
        <ProductsPage />
      </AppErrorBoundary>
    ),
  },
  {
    path: PATHS.products,
    element: (
      <AppErrorBoundary>
        <ProductsPage />
      </AppErrorBoundary>
    ),
  },
  {
    path: PATHS.productDetail,
    element: (
      <AppErrorBoundary>
        <ProductPage />
      </AppErrorBoundary>
    ),
  },
  {
    path: PATHS.cart,
    element: (
      <AppErrorBoundary>
        <CartPage />
      </AppErrorBoundary>
    ),
  },
]);
