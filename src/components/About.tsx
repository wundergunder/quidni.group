import React from 'react';
import { Check } from 'lucide-react';
import { aboutInfo } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About {aboutInfo.name}</h2>
            <h3 className="text-xl text-teal-400 mb-6">{aboutInfo.title}</h3>
            
            <div className="space-y-4 mb-8">
              {aboutInfo.bio.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <h4 className="text-lg font-bold mb-4">Areas of Expertise</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {aboutInfo.expertise.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://www.linkedin.com/in/martygunderson/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-600 rounded-xl transform rotate-3 scale-105 z-0"></div>
              <img 
                src={aboutInfo.photo} 
                alt={aboutInfo.name} 
                className="relative z-10 rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;