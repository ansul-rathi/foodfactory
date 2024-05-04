import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound.jsx";
import { ProductDetail } from "./pages/ProductDetail.jsx";
import { Layout } from "./pages/Layout.jsx";
import { Cart } from "./component/Cart.jsx";
import { Checkout } from "./pages/Checkout.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import AboutUs from "./pages/AboutUs.jsx";
import Success from "./component/Success.jsx";

const router = createBrowserRouter([
  {
    path: "/React-ecommerce",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-business",
        element: <AboutUs />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "cartitems",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
