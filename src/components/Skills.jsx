'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';

// const Carousel = (props) => {
//   const containerRef = useRef(null);
//   const [scrollWidth, setScrollWidth] = useState(0);
//   const items = [
//     { img: props.img1, label: 'React' },
//     { img: props.img2, label: 'Next.js' },
//     { img: props.img3, label: 'Bootstrap' },
//     { img: props.img4, label: 'Git' },
//     { img: props.img5, label: 'Github' },
//     { img: props.img6, label: 'Graphql' },
//     { img: props.img7, label: 'Tailwind' },
//     { img: props.img8, label: 'Webflow' },
//   ];

//   useEffect(() => {
//     if (!containerRef.current) return;
//     const firstList = containerRef.current.querySelector('ul');
//     setScrollWidth(firstList.scrollWidth);
    
//     const container = containerRef.current;
//     let startTime = performance.now();
//     let animationId;
    
//     const animate = (currentTime) => {
//       const elapsed = currentTime - startTime;
//       const speed = 0.03; 
//       const currentTranslate = -(elapsed * speed) % scrollWidth;
      
//       if (container) {
//         container.style.transform = `translateX(${currentTranslate}px)`;
//       }
      
//       animationId = requestAnimationFrame(animate);
//     };

//     animationId = requestAnimationFrame(animate);

//     return () => {
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//     };
//   }, [scrollWidth]);

//   return (
//     <div className="relative w-full overflow-hidden ">
//       <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
//       <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      
//       <div className="flex will-change-transform" ref={containerRef}>
//         {[...Array(4)].map((_, groupIndex) => (
//           <ul key={groupIndex} className="flex items-center justify-start flex-none">
//             {items.map((item, index) => (
//               <li key={`${groupIndex}-${index}`} className="flex items-center mr-12">
//                 <Image
//                   src={item.img}
//                   className="w-6 h-6 mt-0 mr-2"
//                   alt={`Carousel Image ${index + 1}`}
//                 />
//                 <span>{item.label}</span>
//               </li>
//             ))}
//           </ul>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;


import { useState } from 'react';
import { Code, GitBranch, Layout, Layers, Palette, Figma, Command, Workflow } from 'lucide-react';
import Image from 'next/image';
import react from '../components/assets/react.svg';
import nextjs from '../components/assets/nextjs.svg';
import webflow from '../components/assets/webflow.svg';
import wix from '../components/assets/wix.svg';
import css from '../components/assets/css.svg';
import bootstrap from '../components/assets/bootstrap.svg';
import git from '../components/assets/git.svg'
import figma from '../components/assets/figma.svg';

export default function Carousel() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const skillCategories = [
    {
      id: 'nextjs',
      title: 'Next.js Development',
      icon: <Layers size={28} />,
      color: 'bg-blue-600',
      description: 'Creating high-performance, SEO-friendly React applications with Next.js. Experienced with SSR, SSG, and API routes.',
      logo: (
        <div className="bg-gray-100 rounded-full p-2">
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="black" d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
          </svg>
        </div>
      ),
      details: [
        "Server-side rendering and static site generation",
        "API routes and serverless functions",
        "Advanced data fetching and state management",
        "Performance optimization and SEO best practices"
      ]
    },
    {
      id: 'design-toolkit',
      title: 'Design Toolkit',
      icon: <Palette size={28} />,
      color: 'bg-teal-500',
      description: 'Mastery of modern frontend styling tools including Tailwind CSS, Bootstrap, and vanilla CSS for responsive, pixel-perfect designs.',
      logos: [
        // Tailwind
        <div key="tailwind" className="bg-gray-100 rounded-full p-1">
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path fill="#06B6D4" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg>
        </div>,
        // Bootstrap
        <div key="bootstrap" className="bg-gray-100 rounded-full p-1">
          <Image src={bootstrap} alt='boostrap logo' className="w-8 h-8"/>
        </div>,
        // CSS3
        <div key="css" className="bg-gray-100 rounded-full p-1">
          <Image src={css} alt='css logo'  className="w-8 h-8"/>
            <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
          
        </div>
      ],
      details: [
        "Utility-first styling with Tailwind CSS",
        "Component-based development with Bootstrap",
        "Custom CSS animations and transitions",
        "Responsive layouts for all device sizes"
      ]
    },
    {
      id: 'git-workflow',
      title: 'Git & GitHub Workflow',
      icon: <GitBranch size={28} />,
      color: 'bg-orange-500',
      description: 'Version control expertise with Git and collaborative development through GitHub. Experienced with branching strategies and CI/CD.',
      logo: (
        <div className="bg-gray-100 rounded-full p-1">
          <Image src={git} alt='git logo' className='w-8 h-8'/>
            <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
          
        </div>
      ),
      details: [
        "Git workflow management and branching strategies",
        "Collaborative development with pull requests",
        "Code reviews and quality assurance",
        "CI/CD pipeline integration"
      ]
    },
    {
      id: 'figma-to-code',
      title: 'Figma to Code Conversion',
      icon: <Figma size={28} />,
      color: 'bg-purple-500',
      description: 'Transforming design mockups into pixel-perfect, responsive code. Bridging the gap between design and development.',
      logo: (
        <div className="bg-gray-100 rounded-full p-1">
          <Image src={figma} alt='figma logo' className='w-8 h-8'/>
        </div>
      ),
      details: [
        "Precise implementation of design mockups",
        "Component-based architecture matching designs",
        "Responsive adaptations of desktop designs",
        "Animation and interaction implementation"
      ]
    },
    {
      id: 'no-code',
      title: 'No-Code Development',
      icon: <Workflow size={28} />,
      color: 'bg-blue-500',
      description: 'Building professional websites using Webflow and Wix. Empowering clients with easy-to-maintain no-code solutions.',
      logos: [
        // Webflow
        <div key="webflow" className="bg-gray-100 rounded-full p-1">
         <Image src={webflow} alt="webflow Logo" className="w-8 h-8" />
        </div>,
        // Wix
        <div key="wix" className="bg-gray-100 rounded-full p-2">
          <Image src={wix} alt='wixlogo'/>
            <path fill="#0C6EFC" d="M21.768 11.448c0 .345-.288.551-.384.63-.876.724-1.948 1.924-2.808 3.48l-.12.225c-.252.441-.624 1.093-1.128 1.093-.504 0-.876-.652-1.128-1.093l-.12-.225a14.643 14.643 0 0 0-2.808-3.48c-.096-.079-.384-.285-.384-.63s.288-.551.384-.629c.876-.724 1.948-1.924 2.808-3.48l.12-.226c.252-.44.624-1.092 1.128-1.092.504 0 .876.652 1.128 1.092l.12.226c.864 1.556 1.932 2.756 2.808 3.48.096.078.384.285.384.629M3.939 7.45h-.408c-.6 0-.96.312-1.104.96L.039 19.41a.944.944 0 0 0 .936 1.09h.576c.672-.024 1.092-.432 1.224-1.08l1.392-5.64 1.428 5.64c.132.648.552 1.056 1.224 1.08h.576a.944.944 0 0 0 .936-1.09L5.043 8.41c-.144-.648-.504-.96-1.104-.96m11.401 4.01c0-.345.288-.551.384-.63.876-.724 1.948-1.924 2.808-3.48l.12-.225c.252-.441.624-1.093 1.128-1.093.504 0 .876.652 1.128 1.093l.12.225c.864 1.556 1.932 2.756 2.808 3.48.096.079.384.285.384.63s-.288.551-.384.629c-.876.724-1.944 1.924-2.808 3.48l-.12.225c-.252.441-.624 1.093-1.128 1.093-.504 0-.876-.652-1.128-1.093l-.12-.225a14.643 14.643 0 0 0-2.808-3.48c-.096-.078-.384-.284-.384-.629M9.899 12.001c0 .345-.288.551-.384.629-.876.724-1.944 1.924-2.808 3.48l-.12.225c-.252.441-.624 1.093-1.128 1.093-.504 0-.876-.652-1.128-1.093l-.12-.225a14.643 14.643 0 0 0-2.808-3.48C1.307 12.552 1.019 12.346 1.019 12s.288-.551.384-.629c.876-.724 1.944-1.924 2.808-3.48l.12-.226C4.583 7.224 4.955 6.572 5.459 6.572c.504 0 .876.652 1.128 1.092l.12.226c.864 1.556 1.932 2.756 2.808 3.48.096.078.384.285.384.63" />
          
        </div>
      ],
      details: [
        "Custom Webflow development and animations",
        "Wix site creation and customization",
        "CMS setup and content management",
        "Client training and handover"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4 md:p-6  ">
      <div className="max-w-6xl mx-auto pb-10">
        <div className="mb-8 md:mb-12 pt-8 md:pt-10">
          <h1 className="text-4xl md:text-5xl font-medium mb-3 text-black">Development Skills</h1>
        </div>

        {/* Responsive card grid with uneven pattern on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {/* Next.js Card - Full Width on all screens */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02]">
          
          <div className="">
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center relative z-10  ">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                <div className="flex items-center mb-3">
                  <span className="p-2 rounded-full bg-blue-600 text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12.83 2.18a2 2 0 00-1.66 0L2.6 6.08a1 1 0 000 1.83l8.58 3.91a2 2 0 001.64 0l8.58-3.9a1 1 0 000-1.83z"></path>
                      <path d="M22 12v4.74a1 1 0 01-.63.92l-8.54 3.88a2 2 0 01-1.66 0L2.63 17.7A1 1 0 012 16.78V12"></path>
                      <path d="M22 17.5v-5"></path>
                      <path d="M2 17.5v-5"></path>
                    </svg>
                  </span>
                  <h2 className="text-2xl font-bold">Next.js Development</h2>
                </div>
                <p className="text-gray-600">
                  From concept to code, I build high-performance React applications with Next.js.
                  Specializing in server-side rendering, static site generation, and dynamic applications
                  with outstanding performance and SEO advantages.
                </p>
                <ul className="mt-4 text-gray-700 text-sm list-disc pl-5 space-y-1">
                  <li>Server-side rendering & static site generation</li>
                  <li>API routes & serverless functions</li>
                  <li>Performance optimization & image optimization</li>
                  <li>SEO-friendly applications</li>
                  <li>Dynamic routing & data fetching</li>
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end space-x-4">
                {/* React logo */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <div className="bg-gray-100 rounded-full p-2">
                    <Image src={react} alt="Next.js Logo" />
                  </div>
                </div>
                {/* Next.js logo */}
                <div className="w-16 h-16 flex items-center justify-center">
                  <div className="bg-gray-100 rounded-full p-2">
                   <Image src={nextjs} alt="Next.js Logo"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Design Toolkit - Half width on md+ screens, full on mobile */}
          <div 
            className="col-span-1 bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard('design-toolkit')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`h-1 w-full bg-teal-500`}></div>
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{skillCategories[1].title}</h3>
                <span className="p-2 rounded-full bg-teal-500 text-white">
                  {skillCategories[1].icon}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{skillCategories[1].description}</p>
              
              <ul className="text-gray-700 text-sm mb-6 list-disc pl-5 space-y-1">
                {skillCategories[1].details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              
              <div className="mt-auto flex justify-end">
                <div className="flex space-x-2">
                  {skillCategories[1].logos.map((logo, index) => (
                    <div key={index} className="w-10 h-10 flex items-center justify-center">
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Git & GitHub Workflow - Half width on md+ screens, full on mobile */}
          <div 
            className="col-span-1 bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard('git-workflow')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`h-1 w-full bg-orange-500`}></div>
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{skillCategories[2].title}</h3>
                <span className="p-2 rounded-full bg-orange-500 text-white">
                  {skillCategories[2].icon}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{skillCategories[2].description}</p>
              
              <ul className="text-gray-700 text-sm mb-6 list-disc pl-5 space-y-1">
                {skillCategories[2].details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              
              <div className="mt-auto flex justify-end">
                <div className="w-12 h-12 flex items-center justify-center">
                  {skillCategories[2].logo}
                </div>
              </div>
            </div>
          </div>

          {/* Figma to Code - Half width on md+ screens, full on mobile */}
          <div 
            className="col-span-1 md:col-span-1 bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard('figma-to-code')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`h-1 w-full bg-purple-500`}></div>
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{skillCategories[3].title}</h3>
                <span className="p-2 rounded-full bg-purple-500 text-white">
                  {skillCategories[3].icon}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{skillCategories[3].description}</p>
              
              <ul className="text-gray-700 text-sm mb-6 list-disc pl-5 space-y-1">
                {skillCategories[3].details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              
              <div className="mt-auto flex justify-end">
                <div className="w-12 h-12 flex items-center justify-center">
                  {skillCategories[3].logo}
                </div>
              </div>
            </div>
          </div>

          {/* No-Code Development , full on mobile */}
          <div 
            className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02]"
            onMouseEnter={() => setHoveredCard('no-code')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            
            <div className={`h-1 w-full bg-blue-500`}></div>
            
            <div className="p-6 h-full flex flex-col">
              
              <div className="flex  items-center mb-4">
              <span className="p-2 mr-4 rounded-full bg-blue-500 text-white">
                  {skillCategories[4].icon}
                </span>
                <h3 className="text-[24px] font-bold text-gray-900">{skillCategories[4].title}</h3>
                
              </div>
              <p className="text-gray-600 text-[16px] mb-4">{skillCategories[4].description}</p>
              
              <ul className="text-gray-700 text-sm mb-6 list-disc pl-5 space-y-1">
                {skillCategories[4].details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              
              <div className="mt-auto flex justify-end">
                <div className="flex space-x-2">
                  {skillCategories[4].logos.map((logo, index) => (
                    <div key={index} className="w-10 h-10 flex items-center justify-center">
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}