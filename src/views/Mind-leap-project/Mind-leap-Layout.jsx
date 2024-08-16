// import React from "react";
// import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
    
      <div className=" font-primary overflow-x-hidden">
     {/* <Header/> */}
     <Navbar/>
     <Outlet/>
    <Footer/>
    </div>
    </>
  );
}

export default Layout;
