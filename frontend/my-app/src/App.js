import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import CreatePost from "./pages/CreatePost";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/create",
          element: <CreatePost />,
        },

        {
          path: "/login",
          element: <Login />,
        },

        {
          path: "/register",
          element: <Register />,
        },

        {
          path: "/post",
          element: <SinglePost />,
        },
      ],
    },

    // {
    //   path: "/login",
    //   element: <Login/>,
    // },

    // {
    //   path: "/register",
    //   element: <Register/>,
    // },

    // {
    //   path: "/post",
    //   element: <SinglePost/>,
    // },

    // {
    //   path: "/create",
    //   element: <CreatePost/>,
    // },
  ]);

  return (
    // <div>
    //   Hello World.
    // </div>
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
