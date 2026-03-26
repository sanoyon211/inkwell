import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
