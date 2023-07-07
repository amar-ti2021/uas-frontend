import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
