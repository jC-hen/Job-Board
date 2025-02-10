import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index,
        element: <Landing />,
      },
      {
        path: "register",
        element: (
          <div>
            <Register />
          </div>
        ),
      },
      {
        path: "Login",
        element: (
          <div>
            <Login />
          </div>
        ),
      },
      {
        path: "dashboardLayout",
        element: (
          <div>
            <DashboardLayout />
          </div>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
