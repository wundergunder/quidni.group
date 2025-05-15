import React, { useEffect } from 'react';
import { Linkedin, Mail } from 'lucide-react';

function App() {
  useEffect(() => {
    document.title = 'Quidni.Group | Marty Gunderson';
    
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = '/quidni-logo.png';
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <main className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="/marty-headshot.jpg"
              alt="Marty Gunderson"
              className="rounded-2xl shadow-xl w-64 lg:w-96 mx-auto"
            />
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <img 
              src="/quidni-logo.png"
              alt="Quidni Group"
              className="h-16 mb-8 mx-auto lg:mx-0"
            />
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Marty Gunderson
            </h1>
            
            <h2 className="text-xl text-teal-400 mb-6">
              Technology Entrepreneur & Business Innovator
            </h2>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              With over 20 years of experience in technology innovation and business transformation, 
              I help organizations navigate the complex landscape of digital evolution. As the founder 
              of Quidni Group, I work with forward-thinking companies to develop sustainable, 
              future-proof strategies that leverage emerging technologies.
            </p>
            
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/martygunderson/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                Connect
              </a>
              
              <a
                href="mailto:info@quidni.group"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;