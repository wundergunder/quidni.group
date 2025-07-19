import React from 'react';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Connect</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Ready to explore opportunities or discuss how Quidni Group can add value to your ventures? 
          Connect with us on LinkedIn to start the conversation.
        </p>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="/src/assets/images/Marty Headshot (1) copy.jpeg" 
              alt="Marty Gunderson" 
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
            />
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900">Marty Gunderson</h3>
              <p className="text-gray-600">Principal, Quidni Group</p>
            </div>
          </div>
          
          <a
            href="https://www.linkedin.com/in/martygunderson/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Start a Conversation</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-500">
          <div className="flex items-center justify-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>Professional Inquiries Welcome</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>Strategic Partnerships</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Linkedin className="w-4 h-4" />
            <span>Investment Opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}