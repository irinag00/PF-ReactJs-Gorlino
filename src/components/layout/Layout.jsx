import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import MobNavbar from "./navbar/MobNavbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <MobNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
