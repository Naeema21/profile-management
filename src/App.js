import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./assest/router";
import { useSelector } from "react-redux";
import './App.css'

const App =() => {
  const checkAuth = useSelector((state)=>state.auth.isAuthenticated)
  const router = createBrowserRouter([
    checkAuth ? privateRoutes() : {},
    ...publicRoutes(),
  ]);

  return <RouterProvider router={router} />;
}

export default App;