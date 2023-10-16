import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import MobNavbar from "./navbar/MobNavbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <MobNavbar />
      <Outlet className="flex-grow" />
      <Footer />
    </div>
  );
};

export default Layout;
