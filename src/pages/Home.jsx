import React from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";
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
          <Appointment />
          <Footer />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};
