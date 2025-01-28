import React from 'react';
import Image from 'next/image';
import Dot from "../components/assets/dot.png"
// import { Button } from '../components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-white py-16 px-6 sm:py-20 sm:px-12">
      
      <div className="text-center flex flex-col items-center space-y-6">
      <div className='flex'>
            <Image
            src={Dot} 
            className='h-3 w-3 mt-1.5 mr-2'/>
         <p className="text-green-600 font-medium"> Available</p>
         </div>

        
        

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          World-class development for
          <br /> SaaS & Tech companies
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          We create products that serve both users and businesses and drive real results.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center space-y-4">
          
          <div className="mt-5">
            <a
              href="/contact"
              className="bg-black text-white text-xs py-3 px-6 rounded-md flex items-center space-x-2 shadow-lg hover:bg-gray-800"
            >
              Book a 15-min call
            </a>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Hero;
