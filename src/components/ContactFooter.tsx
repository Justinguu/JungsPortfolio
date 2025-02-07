'use client';

import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-blue-500" />
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                <span>justinguuu@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                <span>(678) 923-2057</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Duluth, Georgia</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
              <Github className="w-6 h-6 mr-3 text-blue-500" />
              Social Links
            </h3>
            <div className="space-y-6">
              <a 
                href="https://github.com/Justinguu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span className="group-hover:translate-x-1 transition-transform">
                  GitHub Profile
                </span>
              </a>
              <a 
                href="https://linkedin.com/in/jung-gu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span className="group-hover:translate-x-1 transition-transform">
                  LinkedIn Profile
                </span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700 pt-8">
          © {new Date().getFullYear()} Jung Gu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;