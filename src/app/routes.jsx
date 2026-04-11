import HomePage from "../components/HomePage";
import CartPage from "../components/CartPage";
import ProductPage from "../components/ProductPage";
import ShopPage from "../components/ShopPage";
import ErrorPage from "../components/ErrorPage";
import Layout from "../components/Layout";

const routes = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/product/:id", element: <ProductPage /> },
    ],
  },
];

export default routes;
