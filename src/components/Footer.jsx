import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-xl">Company Name</h4>
              <p className="text-gray-600">
                World-class development for SaaS & Tech companies
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Webflow Development</li>
                <li>UI/UX Design</li>
                <li>Web Development</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Projects</li>
                <li>How it Works</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" />
                <Github className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;