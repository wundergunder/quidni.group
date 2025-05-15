import React from 'react';
import { ExternalLink } from 'lucide-react';
import { companies } from '../data';

const Companies: React.FC = () => {
  return (
    <section id="companies" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Companies</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A portfolio of innovative organizations working at the intersection of technology, 
            sustainability, and human-centered design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div 
              key={company.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{company.name}</h3>
                <p className="text-teal-600 font-medium mb-4">{company.role}</p>
                <p className="text-gray-600 mb-6">{company.description}</p>
                
                {company.url && (
                  <a 
                    href={company.url} 
                    className="inline-flex items-center text-teal-600 hover:text-teal-800 transition font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;