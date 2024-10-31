import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { AddNewProduct } from "./components/AddNewProduct";
import { BasketPage } from "./pages/BasketPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "basket",
        element: <BasketPage />,
      },
      {
        path: "add",
        element: <AddNewProduct/>,
      },
      {
        path: 'products/:id',
        element: <ProductDetailPage/>
      }
    ],
  },
]);

export default router;
