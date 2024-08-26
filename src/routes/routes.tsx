import React, { ReactNode } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PATHS } from "./path";
import { lazy } from "react";
import { AppErrorBoundary } from "../basis/ErrorBoundary";
import { ProfilePage } from "../pages/ProfilePage";

const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const CartPage = lazy(() => import("../pages/CartPage"));

const routeObjects: RouteObject[] = [
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
  {
    path: PATHS.cart,
    element: <CartPage />,
  },
  {
    path: PATHS.profile,
    element: <ProfilePage />,
  },
];

const EachRouteWrapper = ({ children }: { children: ReactNode }) => {
  return <AppErrorBoundary>{children}</AppErrorBoundary>;
};

export const router = createBrowserRouter(
  routeObjects.map((route) => {
    const { element } = route;
    if (!element) return route;
    const wrapped = <EachRouteWrapper>{route.element}</EachRouteWrapper>;
    return { ...route, element: wrapped };
  })
);
