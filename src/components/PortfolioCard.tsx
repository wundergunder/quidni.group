import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gradient: string;
  icon: React.ReactNode;
  website?: string;
}

export default function PortfolioCard({ 
  title, 
  subtitle, 
  description, 
  features, 
  gradient, 
  icon,
  website 
}: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className={`h-2 ${gradient}`}></div>
      
      <div className="p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center text-white`}>
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 font-medium">{subtitle}</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
          >
            <span>Visit Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}