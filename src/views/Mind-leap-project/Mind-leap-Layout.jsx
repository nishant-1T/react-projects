import React from "react";
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
     <Header/>
     <Navbar/>
     <Outlet/>
    <Footer/>
    </>
  );
}

export default Layout;
