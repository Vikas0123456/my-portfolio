import React from 'react';
import { Code, Database, Globe, Smartphone, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Expertise in both frontend and backend technologies with modern frameworks"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Architecture",
      description: "Designing scalable database solutions for complex applications"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      description: "Building responsive and performant web applications"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Leading teams and mentoring junior developers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-white mb-6">
              Passionate Developer with a <span className="text-cyan-400">Vision</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a dedicated software engineer with a strong foundation in computer science 
              and a passion for creating innovative solutions. My journey in technology has 
              equipped me with comprehensive skills in full-stack development, from crafting 
              intuitive user interfaces to building robust backend systems.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              With experience across various programming languages and frameworks, I enjoy 
              tackling complex challenges and turning ideas into reality. I believe in writing 
              clean, maintainable code and following best practices to deliver high-quality 
              software solutions that make a real impact.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              When I'm not coding, I enjoy staying updated with the latest technology trends, 
              contributing to open-source projects, and continuously learning new skills to 
              enhance my development capabilities and push the boundaries of what's possible.
            </p>

            <div className="flex space-x-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">3+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">7+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;