import React from "react";
import { Navbar, Footer } from "../components";

const MainLayout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
