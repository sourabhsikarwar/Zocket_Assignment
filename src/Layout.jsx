import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <Sidebar />

      <div className="p-8 sm:ml-24 bg-sky-50 min-h-screen">
        <div className="rounded-xl mt-16">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
