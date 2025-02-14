import Navbar from "../components/Header";
import Footer from "../components/Footer";
import bgImage from '../assets/bgfull.jpg';
import { me } from "../data/auth";
import { Outlet } from "react-router";
import {useState, useEffect} from "react";

const MainLayout = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState();
  const [checkSession, setCheckSession] = useState(true);
  useEffect(() => {
        const getUser = async () => {
            try {
                const data = await me();

                setUser(data);
                setSignedIn(true);
            } catch (error) {
                console.error(error);
            } finally {
                setCheckSession(false);
            }
        };

        if (checkSession) getUser();
    }, [checkSession]);

  return (
      <div className="relative min-h-screen flex flex-col [&_h2]:font-cabin [&_h3]:font-cabincon [&_p]:font-source [&_button]:font-source [&_button]:font-bold [&_label]:font-source">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#DBF0BE] to-[#78AC4B] z-10">
              {/* Background Image */}
              <div className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-50" style={{ backgroundImage: `url(${bgImage})` }}></div>
          </div>
          <div className="relative z-20">
              <Navbar />
          </div>

          {/* Main Content */}
          <main className="relative z-10">
              <Outlet
                  context={{
                      signedIn,
                      setSignedIn,
                      user,
                      setUser,
                      setCheckSession,
                  }}
              />
          </main>
          <div className="z-20 mt-auto">
              <Footer />
          </div>
      </div>
  );
};

export default MainLayout;