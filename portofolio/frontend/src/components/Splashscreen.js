// SplashScreen.js
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation/animation.json"; // Update this path to your animation JSON file

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default SplashScreen;
