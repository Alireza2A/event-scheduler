import Navbar from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import bgImage from '../assets/bgfull.jpg';

const MainLayout = ({ children }) => {
  const location = useLocation(); 

  // Optional: Prevent rendering anything on the homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="relative h-screen flex flex-col">
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#DBF0BE] to-[#78AC4B] z-10">
           {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-50" style={{ backgroundImage: `url(${bgImage})` }}></div>
      </div>
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div><div className="z-20 mt-auto">
        <Footer />
      </div>

    </div>
  );
};

export default MainLayout;