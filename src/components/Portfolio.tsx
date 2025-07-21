import React from 'react';
import PortfolioCard from './PortfolioCard';
import { Home, TrendingUp, Smartphone } from 'lucide-react';

export default function Portfolio() {
  const companies = [
    {
      title: "Quidni.Lifestyle.Design.",
      subtitle: "Real Estate Excellence",
      description: "Creating aspirational living experiences in the pristine paradise of Turks and Caicos. We specialize in luxury real estate development, property management, and investment advisory services that transform visions into extraordinary realities.",
      features: [
        "Luxury property development and management",
        "Strategic real estate investment advisory",
        "Comprehensive market analysis and positioning",
        "Exclusive access to premium Caribbean properties"
      ],
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
      icon: <Home className="w-6 h-6" />
    },
    {
      title: "Stewardship.Media",
      subtitle: "Premium Financial Intelligence",
      description: "Producing sophisticated financial content and insights exclusively for ultra-high-net-worth individuals, family offices, and institutional stewards. Our deep-dive analysis focuses on wealth preservation strategies and legacy building frameworks.",
      features: [
        "Exclusive content for UHNW individuals and family offices",
        "Advanced wealth preservation strategies",
        "Legacy building and generational planning insights",
        "Institutional-grade financial intelligence"
      ],
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
      icon: <TrendingUp className="w-6 h-6" />,
      website: "https://stewardship.media/"
    },
    {
      title: "Lead Butler",
      subtitle: "Technology Innovation",
      description: "Empowering businesses to harness the full potential of modern technology through custom app development, intelligent CRM automation, and cutting-edge AI agents. We transform operational challenges into competitive advantages.",
      features: [
        "Custom mobile and web application development",
        "Intelligent CRM systems and automation",
        "AI-powered business agents and workflows",
        "Digital transformation consulting"
      ],
      gradient: "bg-gradient-to-br from-purple-600 to-indigo-700",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three distinct companies, each excelling in their respective domains, 
            united by a commitment to exceptional quality and innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <PortfolioCard key={index} {...company} />
          ))}
        </div>
      </div>
    </section>
  );
}
