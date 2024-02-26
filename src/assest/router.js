import { Navigate, createBrowserRouter } from "react-router-dom";
import Profile from '../routes/profile'
import Login from '../routes/login'
import UserInfo from "../routes/user";
import NavBar from "../component/navBar";

export const privateRoutes = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/profile", element: <Profile /> },
      { path: "/user-info", element: <UserInfo /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export const publicRoutes = createBrowserRouter([
  {
    children:[
      { path: "/login", element: <Login /> },
      { path: "*", element: <Navigate to="/login" replace /> },
    ],
  },
]);


