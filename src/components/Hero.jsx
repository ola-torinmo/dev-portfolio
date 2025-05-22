import React from 'react';
import Image from 'next/image';
// import arrow from "../components/assets/warrow.png"
import { ArrowUpRight, } from 'lucide-react';
import profile from "../components/assets/profile.png";

const Hero = () => {
  return (
    <section className="relative bg-white py-16 px-6 sm:py-6 sm:px-12">
      
     {/* Hero Section */}
     <div className="max-w-6xl mx-auto px-4 pt-8  pb-12 sm:pb-12">
        <div className="flex flex-col  items-center md:items-start gap-6 md:gap-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={profile} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Available for work badge */}
            {/* <div className="absolute -right-4 sm:-right-8 top-2 sm:top-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm transform rotate-12">
              Available for work
            </div> */}
          </div>

          {/* Hero Text Content */}
          <div className="flex-1">
            <div className="mb-4 sm:mb-6 text-center md:text-left">
              <p className="text-gray-800 text-lg sm:text-xl mb-2">Yo 👋,</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                I design impactful, immersive
                <br className="hidden sm:block" /> 
                experiences for <span className="text-gray-600">Web3 startups</span>
              </h1>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 sm:mb-8">
              <a href="#" className="flex items-center gap-1 px-3 sm:px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200 text-sm sm:text-base text-gray-800">
                X <ArrowUpRight size={16} />
              </a>
              <a href="#" className="flex items-center gap-1 px-3 sm:px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200 text-sm sm:text-base text-gray-800">
                Dribbble <ArrowUpRight size={16} />
              </a>
              <a href="#" className="flex items-center gap-1 px-3 sm:px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200 text-sm sm:text-base text-gray-800">
                LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>

            <p className="text-gray-600 text-sm sm:text-base max-w-3xl text-center md:text-left">
              Hi, I'm Triumph. For the last 4 years, I've been fortunate to work with early-stage startups in web3, fintech, and SaaS, diving into everything from brand design to full product development, designing products that really move the needle for early-stage startups. I'm fueled by positive team vibes, new ideas, and breaking design boundaries. If you're on the lookout for a teammate who dreams big and takes action, let's create some magic!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
