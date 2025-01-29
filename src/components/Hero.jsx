import React from 'react';
import Image from 'next/image';
import arrow from "../components/assets/warrow.png"

const Hero = () => {
  return (
    <section className="relative bg-white py-16 px-6 sm:py-20 sm:px-12">
      
      <div className="text-center flex flex-col items-center space-y-6">
        
         <div className="flex items-center">
          <div className="h-2 w-2 mr-1.5 rounded-full bg-green-500 animate-blink"></div>
          <p className="text-green-600 font-medium">Available</p>
        </div>


        
        

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl/[50px] font-bold leading-normal ">
          World-class development for
          <br /> SaaS & Tech companies
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto ">
          We create products that serve both users and businesses and drive real results.
        </p>

        {/* CTA */}
        <div className="flex flex-col">
          <div>
            <a
              href="/contact"
              className="bg-black text-white text-xs py-3 px-6 rounded-md flex items-center shadow-lg transition-all duration-300 ease-in-out group hover:px-8"
            >
              <span>Book a 15-min call</span>
              <div className="w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-4 ml-2">
                <Image src={arrow} alt="arrow" width={16} height={16} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
