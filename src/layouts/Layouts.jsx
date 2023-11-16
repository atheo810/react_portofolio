import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layouts() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
