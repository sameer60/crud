import React from "react";
import ReactDOM from "react-dom/client";
import Appbar from "./components/Appbar";
import RestaurantsBody from "./components/RestaurantsBody";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Offers from "./components/Offers/Offers";
import Error from "./components/Error/Error";
import Help from "./components/Help/Help";
import ResDetailCard from "./components/RestaurantsBody/ResDetailCard/RestaurantMenu";

function App() {
  return (
    <div className="app">
      <Appbar />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestaurantsBody />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurants/:resId",
        element: <ResDetailCard />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
