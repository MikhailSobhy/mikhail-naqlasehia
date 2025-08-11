import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./Components/Product/Product";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "product/:id",
          element: <Product />,
        },
        {
          path:"*",
          element: <h1>ERROR !</h1>
        }
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </>
  );
}
