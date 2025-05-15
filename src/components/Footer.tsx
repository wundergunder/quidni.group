import React from 'react';
import { socialLinks } from '../data';
import { Linkedin, Twitter, Github, BookText } from 'lucide-react';

const Footer: React.FC = () => {
  // Map for icon components
  const iconMap: Record<string, React.ReactNode> = {
    Linkedin: <Linkedin className="h-5 w-5" />,
    Twitter: <Twitter className="h-5 w-5" />,
    Github: <Github className="h-5 w-5" />,
    BookText: <BookText className="h-5 w-5" />,
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Quidni<span className="text-teal-400">.Group</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Redefining what's possible through innovative solutions, strategic partnerships, 
              and a commitment to creating a sustainable future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-teal-600 p-2 rounded-full transition-all duration-300"
                  aria-label={link.name}
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#companies" className="text-gray-400 hover:text-teal-400 transition">Companies</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-teal-400 transition">Projects</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-teal-400 transition">About</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-teal-400 transition">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>San Francisco, CA</li>
              <li>Email: info@quidni.group</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Quidni Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-teal-400 text-sm transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;