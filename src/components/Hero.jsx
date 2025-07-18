import React from "react";
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";

const Hero = () => {
    const imageUrl = "https://avatars.githubusercontent.com/u/104422993?v=4";
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-cyan-500/25 animate-pulse">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Vikas Tomar"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                "VT"
              )}
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Vikas Tomar
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-delay-1">
            <span className="typing-animation">Full Stack Developer</span>
          </div>

          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Passionate about creating innovative solutions and building scalable
            applications with modern technologies. Transforming ideas into
            powerful digital experiences.
          </p>

          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-8 animate-fade-in-delay-3">
            <MapPin size={16} className="text-cyan-400" />
            <span>Available for opportunities worldwide</span>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-4">
            <a
              href="mailto:vikas@example.com"
              className="group flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm text-gray-300 px-6 py-3 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Mail size={20} className="group-hover:animate-bounce" />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-tomar-a9756520a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              <Linkedin size={20} className="group-hover:animate-bounce" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/vikastomar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-full hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-gray-500/25 hover:scale-105"
            >
              <Github size={20} className="group-hover:animate-bounce" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="animate-bounce">
            <a href="#about" className="inline-block">
              <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center p-2 hover:border-cyan-300 transition-colors">
                <ArrowDown className="w-4 h-4 text-cyan-400 animate-pulse" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 1s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-fade-in-delay-4 {
          animation: fade-in 1s ease-out 0.8s both;
        }

        .typing-animation {
          border-right: 2px solid #06b6d4;
          animation: typing 3s steps(20) infinite, blink 1s infinite;
        }

        @keyframes typing {
          0%,
          50% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes blink {
          0%,
          50% {
            border-color: transparent;
          }
          51%,
          100% {
            border-color: #06b6d4;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
