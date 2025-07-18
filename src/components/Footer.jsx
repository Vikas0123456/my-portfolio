import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800 relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-110"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Vikas Tomar
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Full Stack Developer passionate about creating innovative solutions 
              and building scalable applications with cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Vikas0123456"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vikas-tomar-a9756520a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:vikastomar1308@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">
                vikastomar1308@gmail.com
              </p>
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">
                +91 9644450770
              </p>
              <p>Available for remote work worldwide</p>
            </div>
            
            <div className="mt-6 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800">
              <p className="text-sm text-gray-400">
                <span className="text-cyan-400 font-semibold">Open to opportunities:</span> 
                <br />Full-time, Contract, or Freelance projects
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Vikas Tomar</span>
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;