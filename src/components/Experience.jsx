import React from 'react';
import { Calendar, MapPin, Building, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Keybrains Tech pvt. ltd.",
      location: "Remote",
      period: "Mar-2025 - May-2025",
      description: [
        "Led development of scalable web applications using React and Node.js",
        "Implemented microservices architecture improving system performance by 40%",
        "Mentored junior developers and conducted comprehensive code reviews",
        "Collaborated with cross-functional teams to deliver high-quality products"
      ],
      technologies: ["React", "Node.js", "Express.js", "AWS", "Docker", "MongoDB"]
    },
    {
      title: "Jr. Software Developer",
      company: "Netclues",
      location: "Ahmedabad, India",
      period: "June-2023 - Jan-2025",
      description: [
        "Developed and maintained multiple client-facing applications",
        "Built RESTful APIs and integrated third-party services",
        "Optimized database queries resulting in 30% faster load times",
        "Participated in agile development processes and sprint planning"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "Next.js", "MySQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Jr. Software Developer",
      company: "Microtechnologies India",
      location: "Bhopal, India",
      period: "Dec-2021 - May-2023",
      description: [
        "Created responsive web applications using modern JavaScript frameworks",
        "Implemented automated testing strategies improving code quality",
        "Worked closely with UI/UX designers to implement pixel-perfect designs",
        "Contributed to open-source projects and technical documentation"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Jest", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building innovative solutions across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-cyan-400/30 p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-400 mb-4">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                      <Building size={16} className="text-cyan-400" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                      <MapPin size={16} className="text-blue-400" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-purple-400" />
                      <span className="font-medium text-cyan-400">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-full border border-gray-700 hover:border-cyan-400/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;