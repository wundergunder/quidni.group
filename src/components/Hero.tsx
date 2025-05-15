import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateElements = () => {
      if (titleRef.current) {
        titleRef.current.classList.add('translate-y-0', 'opacity-100');
      }
      
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.classList.add('translate-y-0', 'opacity-100');
        }
      }, 300);
      
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.classList.add('translate-y-0', 'opacity-100');
        }
      }, 600);
    };

    animateElements();
  }, []);

  const scrollToCompanies = () => {
    const element = document.getElementById('companies');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-6 py-32 z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transform translate-y-10 opacity-0 transition-all duration-700 ease-out"
        >
          Redefining What's <span className="text-teal-400">Possible</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300 transform translate-y-10 opacity-0 transition-all duration-700 ease-out delay-100"
        >
          Quidni Group partners with visionary leaders to build innovative companies, 
          drive transformative projects, and create meaningful impact in a rapidly changing world.
        </p>
        
        <div 
          ref={buttonRef}
          className="transform translate-y-10 opacity-0 transition-all duration-700 ease-out delay-200"
        >
          <button 
            onClick={scrollToCompanies}
            className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center mx-auto"
          >
            Explore Our Work
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <ArrowDown 
          className="text-white opacity-70 h-8 w-8 cursor-pointer" 
          onClick={scrollToCompanies}
        />
      </div>
    </section>
  );
};

export default Hero;