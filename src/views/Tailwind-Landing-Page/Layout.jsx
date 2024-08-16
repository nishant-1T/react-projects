import React from "react";
import Navbar from './components/Navbar/Navbar.jsx'
// import HeroSection from './components/HerSection/HeroSection.jsx'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
     <Navbar/>
     <Outlet/>
    {/* <Footer/> */}
    </>
  );
}

export default Layout;
