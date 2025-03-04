
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/ProjectData'; // Import projects from data file

// ... Your BrowserFrame component stays the same ...
const BrowserFrame = ({ children, url = "example.com" }) => (
  <div className="w-full rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
    {/* Browser Chrome */}
    <div className="bg-gray-50 px-4 py-3 border-b flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
      <div className="ml-4 flex-1 bg-white rounded-md px-3 py-1 text-sm text-gray-500 truncate">
        {url}
      </div>
    </div>
    {children}
  </div>
);

const ProjectsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link 
          // check
            href={`/projects/${project.slug}`} 
            key={project.id} 
            className="group cursor-pointer"
          >
            <BrowserFrame url={project.url}>
              <div className={project.darkMode ? 'bg-gray-900' : 'bg-white'}>
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className={`transition-transform duration-300 group-hover:scale-105 ${
                      project.darkMode ? 'bg-gray-900' : 'bg-gray-50'
                    }`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "top"
                    }}
                    quality={90}
                  />
                </div>
              </div>
            </BrowserFrame>
            <div className="mt-4 space-y-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;