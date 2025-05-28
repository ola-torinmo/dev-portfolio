import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-16 sm:py-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Call to action text */}
        <div className="text-center ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-500 mb-4">
            Let's work together!
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-16">
            Reach Out!
          </h1>
        </div>

        {/* Social links */}
        <div className="flex flex-col items-center space-y-12 mb-16">
          {/* LinkedIn */}
          <div className="text-center">
            <p className="text-xl text-gray-500 mb-1">LinkedIn</p>
            <a 
              href="https://www.linkedin.com/in/olaoluwa-adebayo28/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center text-xl font-medium hover:text-gray-600 transition duration-200"
            >
              Torinmo Adebayo <ArrowUpRight size={20} className="ml-1" />
            </a>
          </div>

          {/* X (Twitter) */}
          <div className="text-center">
            <p className="text-xl text-gray-500 mb-1">X</p>
            <a 
              href="https://x.com/28Satori__" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center text-xl font-medium hover:text-gray-600 transition duration-200"
            >
              @28satori__ <ArrowUpRight size={20} className="ml-1" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center text-gray-500">
          <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
          <p>2025 Torinmo Adebayo</p>
        </div>
      </div>
    </footer>
  );
}