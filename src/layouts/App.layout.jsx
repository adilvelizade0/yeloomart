import React from "react";
import Navbar from "../components/Navbar/Navbar.component.jsx";
import { Outlet } from "react-router-dom";
import BottomBar from "../components/BottomBar/BottomBar.component.jsx";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main className="py-3 container">
        <Outlet />
      </main>
      <footer></footer>
      <BottomBar />
    </>
  );
};

export default AppLayout;
