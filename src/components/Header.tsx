import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#hero" 
            className="text-2xl font-bold tracking-tight text-teal-600"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            Quidni<span className="text-amber-500">.Group</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a 
            onClick={() => scrollToSection('companies')} 
            className="text-gray-700 hover:text-teal-600 transition cursor-pointer flex items-center"
          >
            Companies
          </a>
          <a 
            onClick={() => scrollToSection('projects')} 
            className="text-gray-700 hover:text-teal-600 transition cursor-pointer flex items-center"
          >
            Projects
          </a>
          <a 
            onClick={() => scrollToSection('about')} 
            className="text-gray-700 hover:text-teal-600 transition cursor-pointer flex items-center"
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection('contact')} 
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Connect
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4 px-6 transition-all duration-300 ease-in-out">
          <div className="flex flex-col space-y-4">
            <a 
              onClick={() => scrollToSection('companies')} 
              className="text-gray-700 hover:text-teal-600 py-2 transition"
            >
              Companies
            </a>
            <a 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-700 hover:text-teal-600 py-2 transition"
            >
              Projects
            </a>
            <a 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-teal-600 py-2 transition"
            >
              About
            </a>
            <a 
              onClick={() => scrollToSection('contact')} 
              className="bg-teal-600 text-white px-5 py-2 rounded-full inline-block text-center"
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;