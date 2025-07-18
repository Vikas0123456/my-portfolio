import React from 'react';
import { Code, Database, Globe, Server, GitBranch, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 98 },
        { name: "TypeScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Material UI", level: 88 },
        { name: "Next.js", level: 82 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      color: "from-blue-400 to-purple-500",
      skills: [
        { name: "Node.js", level: 93 },
        // { name: "Python", level: 88 },
        { name: "Express.js", level: 90 },
        // { name: "Django", level: 80 },
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MsSQL", level: 80 },
        { name: "Redis", level: 75 },
        { name: "AWS", level: 82 },
        // { name: "Firebase", level: 85 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <GitBranch className="w-8 h-8" />,
      color: "from-green-400 to-cyan-500",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 85 },
        { name: "Gitlab", level: 75 },
        { name: "Jest", level: 88 },
        { name: "Webpack", level: 80 },
        { name: "CI/CD", level: 83 },
      ]
    }
  ];

  const additionalSkills = [
    "Microservices", "RESTful APIs", "Unit Testing", "Agile/Scrum",
    "Code Review", "Performance Optimization", "Security Best Practices",
    "Mobile Development", "Cloud Computing", "IoT", "Progressive Web Apps"
  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mastering the tools that power modern applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
            >
              <div className="flex items-center mb-8">
                <div className={`text-transparent bg-gradient-to-r ${category.color} bg-clip-text mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-white mb-8">
            Additional <span className="text-cyan-400">Expertise</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="group px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-full border border-gray-700 hover:border-cyan-400/50 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
              15+
            </div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
              3+
            </div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
              7+
            </div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
              100%
            </div>
            <div className="text-gray-400">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;