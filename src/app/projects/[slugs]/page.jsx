"use client"

import { getProjectBySlug, getOtherProjects } from '../../../data/ProjectData';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import React from 'react';
import  Navbar from "../../../components/Navbar";
import Footer from '../../../components/Footer';
import Contact from '../../../components/Contact';

export default function ProjectPage({ params }) {
  // Unwrap the params Promise
  const unwrappedParams = use(params);
  const { slugs } = unwrappedParams;
  const slug = Array.isArray(slugs) ? slugs[0] : slugs;
  
  if (!slug) {
    console.error('No slug provided in URL parameters');
    return <div>Project not found</div>;
  }

  // Get the current project and other projects
  const currentProject = use(getProjectBySlug(slug));
  // Make sure we get an array, even if empty
  const otherProjects = getOtherProjects(slug) || [];

  // Add debug logging
  console.log('Current slug:', slug);
  console.log('Current project:', currentProject);
  console.log('Other projects:', otherProjects);

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Navbar />
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="md:text-4xl text-2xl font-bold mb-3 ">{currentProject.title}</h1>
      <p className="text-gray-600 mb-4">{currentProject.details || 'N/A'}</p>
      
  
      <div className="relative w-full aspect-video mb-12">
        {currentProject.image ? (
          <Image
            src={currentProject.image}
            alt={currentProject.title || 'Project Image'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              objectPosition: "top"
            }}
            className="object-cover rounded-lg"
            priority
          />
        ) : (
          <div className="object-cover rounded-lg bg-gray-200 flex items-center justify-center h-full">
            <span>No Image Available</span>
          </div>
        )}
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 md:flex gap-8 mb-12 justify-stretch ">
        <div className='col-span-2'>
          <h2 className="font-semibold text-lg mb-2 ">DESCRIPTION</h2>
          
          <p className="text-xl text-gray-600 mb-8">{currentProject.description}</p>
        </div>
        <div className='md:flex-col'>
        <div className=' mb-5'>
          <h2 className="font-semibold text-lg mb-2">TECH STACK</h2>
          <p className="text-gray-600">{currentProject.technologies || 'N/A'}</p>
        </div>
        <div className=' mb-5'>
          <h2 className="font-semibold text-lg mb-2">CLIENT</h2>
          <p className="text-gray-600">{currentProject.client || 'N/A'}</p>
        </div>
        <div className=' mb-5'>
          <h2 className="font-semibold text-lg mb-2 ">YEAR</h2>
          <p className="text-gray-600">{currentProject.year || 'N/A'}</p>
          
        </div>
        </div>
        
      </div>
  
      {currentProject.url && (
        <div className="flex justify-center mb-16">
          <a
            href={currentProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Visit Website
          </a>
        </div>
      )}
  
      <section>
        <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(otherProjects) && otherProjects.map((otherProject) => (
            <Link key={otherProject.id} href={`/projects/${otherProject.slug}`} className="group">
              <div className="relative aspect-video mb-4">
                {otherProject.image ? (
                  <Image
                    src={otherProject.image}
                    alt={otherProject.title || 'Other Project Image'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    
                    className="object-cover rounded-lg"
                    style={{
                      objectFit: "cover",
                      objectPosition: "top"
                    }}
                  />
                ) : (
                  <div className="object-cover rounded-lg bg-gray-200 flex items-center justify-center h-full">
                    <span>No Image Available</span>
                  </div>
                )}
              </div>
              <h3 className="font-medium mb-2">{otherProject.title || 'Untitled Project'}</h3>
             
            </Link>
          ))}
        </div>
      </section>
    </main>
    <Contact/>
    <Footer/>
    </>
  );
}