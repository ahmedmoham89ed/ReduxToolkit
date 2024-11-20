import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import React from "react";
const RootLayout = () => {
  return (
    <main className="container">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;