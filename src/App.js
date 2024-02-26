import React from "react";
import { useSelector } from "react-redux";
import {privateRoutes , publicRoutes } from './assest/router'
import {  RouterProvider } from "react-router-dom";
import './App.css'

const App = () => {
  const checkAuth = useSelector((state) => state.auth.isAuthenticated);

  const router = checkAuth ? privateRoutes : publicRoutes

  // const router = createBrowserRouter([
  //   checkAuth ? privateRoutes() : {},
  //   ...publicRoutes(),
  // ]);

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  );
}

export default App;