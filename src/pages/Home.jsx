import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../components/Home/Carousel";
import Navbar from "../components/Navbar";
import Cards from "../components/Home/Cards";
import Appointment from "../components/Home/Appointment";
import Footer from "../components/Home/Footer";
import { Outlet } from "react-router-dom";
import { ProfileContextProvider } from "../contexts/ProfileContextProvider";

export const Home = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
    <ProfileContextProvider>
      <Navbar></Navbar>
    </ProfileContextProvider>
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
