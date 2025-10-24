import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
