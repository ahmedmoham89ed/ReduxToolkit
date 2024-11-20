import React from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import PageNotFound from "../Pages/PageNotFound";
  import RootLayout from "../Pages/Layout";
  import ErrorHandler from "../Error/ErrorHandler";
  import HomePage from "../Pages/Index";
  import Product from "../Components/Product";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Root Layout */}
        <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<Product />} />
        </Route>
  
        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );
  
  export default router;