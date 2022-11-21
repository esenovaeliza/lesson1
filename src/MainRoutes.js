import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/products/ProductDetails";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";

const MainRoutes = () => {
  const PUBLIC_POUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/products", element: <ProductsPage />, id: 2 },
    { link: "/cart", element: <CartPage />, id: 3 },
    { link: "/details/:id", element: <ProductDetails />, id: 4 },
    { link: "*", element: <NotFoundPage />, id: 5 },
  ];
  return (
    <Routes>
      {PUBLIC_POUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
