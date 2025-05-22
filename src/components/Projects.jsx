
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/ProjectData'; // Import projects from data file


// // ... Your BrowserFrame component stays the same ...
// const BrowserFrame = ({ children, url = "example.com" }) => (
//   <div className="w-full rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
//     {/* Browser Chrome */}
//     <div className="bg-gray-50 px-4 py-3 border-b flex items-center gap-2">
//       <div className="flex gap-1.5">
//         <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//         <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//         <div className="w-3 h-3 rounded-full bg-gray-300"></div>
//       </div>
//       <div className="ml-4 flex-1 bg-white rounded-md px-3 py-1 text-sm text-gray-500 truncate">
//         {url}
//       </div>
//     </div>
//     {children}
//   </div>
// );

// const ProjectsSection = () => {
//   return (
//     <section className="w-full max-w-7xl mx-auto px-8 py-6">
//       <div className='text-left py-6'>
//         <h6 className='text-[48px] font-medium text-black mb-3'>Featured Works</h6>

//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((project) => (
//           <Link 
//           // check
//             href={`/projects/${project.slug}`} 
//             key={project.id} 
//             className="group cursor-pointer"
//           >
//             <BrowserFrame url={project.url}>
//               <div className={project.darkMode ? 'bg-gray-900' : 'bg-white'}>
//                 <div className="relative w-full h-[300px] md:h-[400px]">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     className={`transition-transform duration-300 group-hover:scale-105 ${
//                       project.darkMode ? 'bg-gray-900' : 'bg-gray-50'
//                     }`}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                     style={{
//                       objectFit: "cover",
//                       objectPosition: "top"
//                     }}
//                     quality={90}
//                   />
//                 </div>
//               </div>
//             </BrowserFrame>
//             <div className="mt-4 space-y-2">
//               <h3 className="text-xl font-medium
//             ">{project.title}</h3>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };



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
  return (
    <div className="bg-gray-50 rounded-3xl p-8 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Content */}
        <div className="space-y-6">
          <h2 className="text-[24px] font-semibold text-gray-900">{project.title}</h2>
          
          <p className="text-gray-600 text-[16px] leading-relaxed">
            {project.description}
          </p>
          
          <div className="space-y-2">
            <div className="text-gray-700">
              <span className="font-medium">Industry:</span> {project.industry}
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Product type:</span> {project.projectType}
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
                    className="transition-transform duration-300 hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
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