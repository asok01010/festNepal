import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <>
      <div className="front-header">
        <Navbar />
      </div>

      <div className="front-container">
        <div className="front-content">
          <Outlet />
        </div>
      </div>

      <div className="front-footer">
        <Footer />
      </div>
    </>
  );
};

export default Landing;
