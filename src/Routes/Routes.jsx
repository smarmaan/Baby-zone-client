import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./RoutePrivate/PrivateRoutes";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/Error/ErrorPage";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
        loader: () => fetch(`https://baby-zone-server.vercel.app/all-toys`),
        // loader: () => fetch(`http://localhost:5000/all-toys`),
      },
      {
        path: "/toy-details/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://baby-zone-server.vercel.app/toy-details/${params.id}`),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-toy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

{
  /* <PrivateRoute></PrivateRoute>; */
}
