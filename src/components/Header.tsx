import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-6">
          <div className="flex items-center space-x-3">
            <img 
              src="/src/assets/images/Just Q (1).png" 
              alt="Quidni Group Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Quidni Group</h1>
              <p className="text-sm text-gray-600">of Companies</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}