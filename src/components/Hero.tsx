import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          <span className="text-blue-600">Why Not Put a Dent</span>
          <span className="block text-gray-900">in the Universe?</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Quidni Group represents a portfolio of specialized companies delivering 
          exceptional value through strategic consulting, premium content creation, 
          and innovative technology solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-gray-600">Portfolio Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
            <div className="text-gray-600">Possibilities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
            <div className="text-gray-600">Vision</div>
          </div>
        </div>
      </div>
    </section>
  );
}