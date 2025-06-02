"use client"
import React, {useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/ProjectData'; // Import projects from data file
import Aos from 'aos'
import 'aos/dist/aos.css'




const BrowserFrame = ({ children, url = "example.com" }) => (
  <div className="w-full rounded-xl overflow-hidden bg-white shadow-sm border border-gray-200">
    {/* Browser Chrome */}
    <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
      <div className="ml-4 flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-gray-500 truncate border">
        {url}
      </div>
    </div>
    {children}
  </div>
);

const ProjectCard = ({ project }) => {
  useEffect(()=>{
      Aos.init({duration: 2000});
    },[])
  return (
    <div className="bg-gray-50 rounded-3xl p-8 mb-12" data-aos="fade-down">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Content */}
        <div className="space-y-4">
          <h2 className="text-[24px] font-semibold text-gray-900">{project.title}</h2>
          
          <p className="text-gray-600 text-[16px] leading-relaxed">
            {project.description}
          </p>
          
          <div className="space-y-2">
            <div className="text-gray-700">
              <span className="font-medium">Industry:</span> {project.industry}
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Project tools:</span> {project.technologies}
            </div>
          </div>

          <a
            href={project.url}
            target={project.url !== "#" ? "_blank" : "_self"}
            rel={project.url !== "#" ? "noopener noreferrer" : ""}
            className="inline-block"
          >
            <button 
              className="bg-black text-white px-5 py-2 text-[14px] rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={project.url === "#"}
            >
              Visit Website
            </button>
          </a>
        </div>

      {/* Right side - Browser mockup with abstract background */}
        <div className="lg:pl-4">
          {/* Abstract Background Container */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Abstract Background Image */}
            <div className="absolute inset-0">
              <Image
                src={project.abstractBg}
                alt={`${project.title} abstract background`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                quality={90}
                className="opacity-90"
              />
            </div>
            
            {/* Browser Frame positioned on top of abstract background */}
            <div className="relative z-10 p-8">
              <BrowserFrame url={project.url}>
                <div className="relative w-full h-80 bg-white overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} website screenshot`}
                    className="transition-transform duration-300 hover:scale-105 md:object-cover "
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      
                      objectPosition: "top"
                    }}
                    quality={90}
                  />
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-12">
      <div className="text-left mb-12">
        <h1 className="text-5xl font-medium text-black">Featured Works</h1>
      </div>
      
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};


export default ProjectsSection;       