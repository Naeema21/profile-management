import { Navigate } from "react-router-dom";
import Profile from '../routes/profile'
import Login from '../routes/login'


export const privateRoutes = () => {
  return {
    children: [
      { path: "/profile", element: <Profile /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}

export const publicRoutes = () => {
  return [
    { path: "/login", element: <Login /> },
    { path: "*", element: <Navigate to="/login" replace /> },
  ];
}