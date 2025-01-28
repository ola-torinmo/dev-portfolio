


"use client"
import React from 'react';
import Lottie from 'lottie-react';
import anime from "../components/assets/computer.json";
import bottom from "../components/assets/bottom.json";
import left from "../components/assets/left.json";
import right from "../components/assets/right.json";

const About = () => {
  const features = [
    {
      id: 1,
      title: "Webflow Developer",
      description: "Transform your concepts into stunning, responsive websites with expert development, ensuring seamless functionality and visual appeal."
    },
    {
      id: 2,
      title: "User Experience Designer", 
      description: "Elevate your brand with visually stunning and user-friendly interfaces meticulously crafted to ensure intuitive usability."
    },
    {
      id: 3,
      title: "HTML, CSS, and JavaScript Expert",
      description: "Transform your designs into interactive and dynamic websites using advanced skills in HTML, CSS, and JavaScript development."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-16 pt-24 pb-32">
      {/* Header Section */}
      <div className="text-center mb-[-10%]">
        <h1 className="text-4xl font-bold mb-3">You Deserve to be Amazing</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with experts and get the guidance you need. Our platform 
          provides comprehensive solutions to help you achieve your goals.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="relative min-h-[900px]">
        {/* Main Centered Lottie Animation */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ">
          <Lottie 
            animationData={anime}
            loop={true}
            className="w-full h-full"
            speed={0.2} // Slows down the animation (default is 1)
          />
        </div>

        {/* Bottom Connecting Lottie */}
        <div className="absolute left-1/2 top-[65%] -translate-x-1/2 w-[300px] h-[200px]">
          <Lottie 
            animationData={bottom}
            loop={true}
            className="w-full h-full"
          />
        </div>

        {/* Left Connecting Lottie */}
        <div className="absolute left-[20%] top-[45%] w-[200px] h-[200px]">
          <Lottie 
            animationData={left}
            loop={true}
            className="w-full h-full"
          />
        </div>

        <div className="absolute left-[65%] top-[35%] w-[150px] h-[150px] -rotate-12">
          <Lottie 
            animationData={right}
            loop={true}
            className="w-full h-full"
          />
        </div>

        {/* Feature Cards -translate-y-1/4 */}
        <div className="absolute left-4 top-1/4 transform w-80">
          <div className="p-6 rounded-xl bg-white 
            shadow-[0_20px_50px_rgba(8,_112,_184,_0.3),_0_10px_10px_rgba(8,_112,_184,_0.1)]
            hover:shadow-[0_25px_60px_rgba(8,_112,_184,_0.4),_0_15px_15px_rgba(8,_112,_184,_0.2)]
            transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-600 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{features[0].title}</h3>
            <p className="text-gray-600 text-sm">{features[0].description}</p>
          </div>
        </div>

        <div className="absolute right-4 top-1/2 w-80">
          <div className="p-6 rounded-xl bg-white 
            shadow-[0_20px_50px_rgba(8,_112,_184,_0.3),_0_10px_10px_rgba(8,_112,_184,_0.1)]
            hover:shadow-[0_25px_60px_rgba(8,_112,_184,_0.4),_0_15px_15px_rgba(8,_112,_184,_0.2)]
            transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-600 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{features[1].title}</h3>
            <p className="text-gray-600 text-sm">{features[1].description}</p>
          </div>
        </div>

        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/4 w-[600px]">
          <div className="p-6 rounded-xl bg-white 
            shadow-[0_20px_50px_rgba(8,_112,_184,_0.3),_0_10px_10px_rgba(8,_112,_184,_0.1)]
            hover:shadow-[0_25px_60px_rgba(8,_112,_184,_0.4),_0_15px_15px_rgba(8,_112,_184,_0.2)]
            transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-600 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{features[2].title}</h3>
            <p className="text-gray-600 text-sm">{features[2].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;