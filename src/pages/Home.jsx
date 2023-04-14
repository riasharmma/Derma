import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../components/Home/Carousel";
import Navbar from "../components/Navbar";
import Cards from "../components/Home/Cards";
import Footer from "../components/Home/Footer";
import { Outlet } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Navbar></Navbar>
      {isHomePage ? (
        <>
          <Carousel />
          <Cards />
          {/* <Appointment /> */}
          <Footer />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};
