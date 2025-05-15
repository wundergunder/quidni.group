import React, { useEffect } from 'react';
import { Linkedin } from 'lucide-react';

function App() {
  useEffect(() => {
    document.title = 'Quidni.Group | Marty Gunderson';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <main className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Marty Gunderson
          </h1>
          
          <h2 className="text-xl text-teal-400 mb-6">
            Technology Entrepreneur & Business Innovator
          </h2>
          
          <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl">
            With over 20 years of experience in technology innovation and business transformation, 
            I help organizations navigate the complex landscape of digital evolution. As the founder 
            of Quidni Group, I work with forward-thinking companies to develop sustainable, 
            future-proof strategies that leverage emerging technologies.
          </p>
          
          <div>
            <a
              href="https://www.linkedin.com/in/martygunderson/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
              Connect
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;