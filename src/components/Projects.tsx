import React from 'react';
import { projects } from '../data';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformative initiatives that solve complex challenges and create lasting value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-200 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-teal-600/80 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.url && (
                  <a 
                    href={project.url} 
                    className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
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

export default Projects;