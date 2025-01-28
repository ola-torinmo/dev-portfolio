import React from 'react';
import Image from 'next/image';
// import { Card, CardContent } from '@/components/ui/card';

// Import your images
import projectImage1 from '../components/assets/Nexant.jpg';
import projectImage2 from '../components/assets/ban.jpg';
import projectImage3 from '../components/assets/axel0.jpg';
// import projectImage4 from '@/public/images/profit-pro.jpg';

const BrowserFrame = ({ children, url = "example.com" }) => (
  <div className="w-full rounded-xl overflow-hidden bg-white shadow-lg">
    {/* Browser Chrome */}
    <div className="bg-gray-100 px-4 py-3 border-b flex items-center gap-2">
      {/* Window Controls */}
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
      
      {/* Navigation Controls */}
      <div className="flex gap-2 ml-4">
        <div className="text-gray-400">←</div>
        <div className="text-gray-400">→</div>
        <div className="text-gray-400">↻</div>
      </div>
      
      {/* URL Bar */}
      <div className="ml-4 flex-1 bg-white rounded-md px-3 py-1 text-sm text-gray-500 truncate">
        {url}
      </div>
    </div>
    {children}
  </div>
);

const ProjectImage = ({ image, alt, className = "" }) => (
  <div className="relative w-full h-[300px] md:h-[400px]">
    <Image
      src={image}
      alt={alt}
      className={`transition-transform duration-300 group-hover:scale-105 ${className}`}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      style={{
        objectFit: "cover",
        objectPosition: "top"
      }}
      quality={90}
    />
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      url: "https://nexantconsult.com/",
      image: projectImage1,
    },
    {
      id: 2,
      url: "https://bank-finance.vercel.app/",
      image: projectImage2,
    },
    {
      id: 3,
      url: "https://axel-cyber-portfolio.vercel.app/",
      image: projectImage3,
    },
    {
      id: 4,
      url: "profit.com",
      image: projectImage1,
      darkMode: true,
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group">
            <BrowserFrame url={project.url}>
              <div className={project.darkMode ? 'bg-gray-900' : 'bg-white'}>
                <ProjectImage
                  image={project.image}
                  alt={`Project ${project.id}`}
                  className={project.darkMode ? 'bg-gray-900' : 'bg-gray-50'}
                />
              </div>
            </BrowserFrame>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;