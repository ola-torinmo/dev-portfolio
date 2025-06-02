'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "../components/assets/satori.png"
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (

    <div className="relative">
    {/* Navbar */}
    <nav className="max-w-3xl mx-auto px-6 py-6">
      {/* Desktop and Mobile Collapsed View */}
      <div className="flex justify-between items-center py-3 px-6 bg-white rounded-xl border border-gray-100 shadow-sm">
        {/* Logo */}
           <div className="flex items-center">
              <a href="/"><Image className="h-[50px] w-[120px]" src={Logo} alt="Seestem" /></a>
          </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="/torinmo.dev.pdf" 
            download="torinmo.dev.pdf"
            className="flex items-center justify-center px-5 py-2 text-[14px] border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition duration-200"
          >
            Download CV
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-green-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Expanded */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-6 px-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center space-y-6">
        
          <a 
            href="/torinmo.dev.pdf" 
            download="torinmo.dev.pdf"
            className="flex items-center justify-center px-5 py-2 text-[14px] border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition duration-200 w-48"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
      </div>
  );
};

export default Navbar;