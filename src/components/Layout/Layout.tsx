import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {location.pathname !== "/about" ? <Hero /> : ""}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
