"use client"
import React, {useEffect}  from 'react';
import Image from 'next/image';
import { ArrowUpRight, } from 'lucide-react';
import profile from "../components/assets/profile.jpg";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
   useEffect(()=>{
    Aos.init({duration: 3000});
  },[])
  return (
    <section className="relative bg-white py-16 px-6 sm:py-6 sm:px-12" data-aos="zoom-in-down">
      
     {/* Hero Section */}
     <div className="max-w-6xl mx-auto px-4 pt-8  pb-12 sm:pb-12">
        <div className="flex flex-col  items-center md:items-start gap-6 md:gap-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-gray-200">
              <Image 
                src={profile} 
                alt="Profile" 
                className="w-full h-full "
                  style={{
                      objectFit: "cover",
                      objectPosition: "top"
                    }}
              />
            </div>
            
          </div>

          {/* Hero Text Content */}
          <div className="flex-1">
            <div className="mb-4 sm:mb-6 text-center md:text-left">
              <p className="text-gray-800 text-lg sm:text-xl mb-2">Hey there 👋,</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                I convert complex problems  
                <br className="" /> 
                 into elegant <span className="text-gray-600">digital solutions</span>
              </h1>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 sm:mb-8">
              <a href="https://x.com/28Satori__" className="flex items-center gap-1 px-3 sm:px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200 text-sm sm:text-base text-gray-800">
                X <ArrowUpRight size={16} />
              </a>
              <a href="https://github.com/ola-torinmo" className="flex items-center gap-1 px-3 sm:px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200 text-sm sm:text-base text-gray-800">
                Github <ArrowUpRight size={16} />
              </a>
              <a href="https://www.linkedin.com/in/olaoluwa-adebayo28/" className="flex items-center gap-1 px-3 sm:px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200 text-sm sm:text-base text-gray-800">
                LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>

            <p className="text-gray-600 text-sm sm:text-base max-w-3xl text-center md:text-left">
              Hi, I'm Tori a passionate developer who believes great code isn't just functional—it's beautiful, maintainable, and makes people's lives better. I've been fortunate to work with start-ups in Saas, so, Whether I'm architecting scalable web applications, crafting intuitive user interfaces, or diving deep into data structures, I approach every project with curiosity, precision and efficiency!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
