import React from 'react';
import { socialLinks } from '../data';
import { Linkedin, Twitter, Github, BookText } from 'lucide-react';

const SocialLinks: React.FC = () => {
  // Map for icon components
  const iconMap: Record<string, React.ReactNode> = {
    Linkedin: <Linkedin className="h-6 w-6" />,
    Twitter: <Twitter className="h-6 w-6" />,
    Github: <Github className="h-6 w-6" />,
    BookText: <BookText className="h-6 w-6" />,
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Connect With Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Follow our journey and join the conversation across our social platforms.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gray-700 hover:bg-teal-600 text-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              <span className="group-hover:rotate-12 transition-transform duration-300">
                {iconMap[link.icon]}
              </span>
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;