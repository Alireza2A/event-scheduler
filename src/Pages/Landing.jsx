import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import slothAnimation from '../assets/sloth.json';
import bgImage from '../assets/bg-l.jpg'; 

const LandingPage = () => {
  const navigate = useNavigate();
  const [animationFinished, setAnimationFinished] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationFinished(true);
    navigate('/signin'); 
  };

  return (
    <div className="h-screen w-screen flex text-[#48371E]">
      {/* Left Side */}
      <div
        className="w-1/3 flex flex-col justify-center items-center bg-opacity-50 z-10"
        style={{
          background: 'linear-gradient(to bottom, #EBD9A6, #DBF0BE, #72AF1D)',
        }}
      >
        <h2 className="text-2xl md:text-4xl font-cabincon mb-2 animate-fade-in">
          Take it slowly...
        </h2>
        <Lottie
          animationData={slothAnimation}
          className="w-3/4 max-w-md"
          loop={true}
        />
        <h2 className="text-2xl md:text-4xl font-cabincon mt-2 animate-fade-in animation-delay-1000">
          ...day by day!
        </h2>
        <Link to="/SignIn" className="link link-hover"><button className="btn mt-8 bg-green-900 hover:bg-green-700 font-cabin text-white">Start now</button></Link>
      </div>

      {/* Right Side */}
      <div
        className="w-2/3 h-full relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
        }}
      >
        <h1 className="absolute bottom-4 left-16 text-2xl font-galada z-10">ChillPlanner</h1>
        <div className="absolute inset-0 bg-linear-to-b from-[#DBF0BE] to-[#72AF1D] bg-opacity-50 z-0"></div>
      </div>
    </div>
  );
};

export default LandingPage;