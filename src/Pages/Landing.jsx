import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import slothAnimation from '../assets/sloth.json';
import bgImage from '../assets/bg-l.jpg'; // Import the background image

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
        <h2 className="text-2xl md:text-4xl font-bold mb-4 animate-fade-in">
          Take it slowly...
        </h2>
        <Lottie
          animationData={slothAnimation}
          className="w-3/4 max-w-md"
          loop={false} // Ensure it plays only once
          onComplete={handleAnimationComplete} // Trigger redirection when animation ends
        />
        <h2 className="text-2xl md:text-4xl font-bold mt-4 animate-fade-in animation-delay-1000">
          ...day by day!
        </h2>
      </div>

      {/* Right Side with Background */}
      <div
        className="w-2/3 h-full relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#DBF0BE] to-[#72AF1D] bg-opacity-50 z-0"></div> {/* Overlay for 50% opacity */}
      </div>
    </div>
  );
};

export default LandingPage;