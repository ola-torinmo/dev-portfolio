'use client';

import React from 'react';
import Image from 'next/image';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from "../components/assets/satori.png"

const Navbar = () => {
  return (
    <div className="relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-16 my-6 backdrop-blur-md bg-white/70 border border-white/20 rounded-full shadow-lg">
          {/* Logo */}
          <div className="flex items-center">
            <Image className="h-10 w-auto" src={Logo} alt="Seestem" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium text-sm"
            >
              Work
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium text-sm"
            >
              Services
            </a>
            <a
              href="/pricing"
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium text-sm"
            >
              Pricing
            </a>
            <a
              href="/faqs"
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium text-sm"
            >
              FAQs
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-white/30 focus:outline-none transition-colors duration-200">
                    {open ? (
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                  <DisclosurePanel className="absolute top-16 left-0 right-0 backdrop-blur-md bg-white/70 border border-white/20 rounded-2xl shadow-lg py-4 mx-4">
                    <div className="space-y-2 text-center">
                      <a href="/" className="block text-gray-700 hover:text-black transition-colors duration-200 font-medium">
                        Work
                      </a>
                      <a href="/services" className="block text-gray-700 hover:text-black transition-colors duration-200 font-medium">
                        Services
                      </a>
                      <a href="/pricing" className="block text-gray-700 hover:text-black transition-colors duration-200 font-medium">
                        Pricing
                      </a>
                      <a href="/faqs" className="block text-gray-700 hover:text-black transition-colors duration-200 font-medium">
                        FAQs
                      </a>
                    </div>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>

          {/* Call-to-Action Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-black/80 hover:bg-black text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 backdrop-blur-sm"
            >
              Have an Idea?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;