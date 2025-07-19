import React from 'react';
import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/images/Just Q (1).png" 
              alt="Quidni Group Logo" 
              className="w-8 h-8 object-contain"
            />
            <div>
              <div className="text-lg font-bold">Quidni Group</div>
              <div className="text-sm text-gray-400">of Companies</div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Quidni Group of Companies. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Building excellence across industries
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}