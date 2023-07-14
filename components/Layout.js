import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="md:container md:mx-auto lg:w-[1021px]">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
