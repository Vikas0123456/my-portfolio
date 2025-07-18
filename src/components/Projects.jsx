import React from "react";
import { ExternalLink, Github, Star, GitBranch } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Swadish World",
      description:
        "A full-stack web application built for a spice-selling company, developed using React.js and Node.js. It includes features like user authentication, admin dashboard, payment integration with Stripe, and real-time inventory management using Socket.io.",
      image:
        "https://www.swadishworld.com/static/media/logo.47c7ff429af5b75d76e1.webp",
      technologies: ["React.js", "Node.js", "MongoDB", "JWT", "Socket.io"],
      liveUrl: "https://www.swadishworld.com/",
      githubUrl: "#",
      featured: true,
      stats: { stars: 124, forks: 45 },
    },
    {
      title: "Cloud Rental Manager",
      description:
        "A full-stack tenant management web application developed using Node.js and React.js. It offers real-time collaboration, role-based access, and efficient tenant/property tracking with a MySQL backend and secure deployment via Putty and AWS.",
      image:
        "https://saas.cloudrentalmanager.com/static/media/websitelogo.36615f94a2bf66449b4e2a2f1fcc9485.svg",
      technologies: ["React.js", "Node.js", "MySQL", "Putty", "AWS"],
      liveUrl: "https://saas.cloudrentalmanager.com/",
      githubUrl: "#",
      featured: true,
      stats: { stars: 89, forks: 32 },
    },
    {
      title: "e-GOV",
      description:
        "A full-stack web application developed for the Government of Cayman Islands, featuring location-based services using Google Maps SDK. Built with Node.js, React.js, and MySQL to provide dynamic data handling and an interactive user interface.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "React.js", "MySQL", "Google Maps SDK"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 67, forks: 23 },
    },
    {
      title: "FliteX",
      description:
        "A full-stack analytics platform tailored for the aviation industry. Developed using Node.js and Next.js with PostgreSQL for efficient data management. Integrated Google Maps SDK for location-based insights and advanced map-based visualizations.",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Next.js", "PostgreSQL", "Google Maps SDK"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 156, forks: 78 },
    },
    {
      title: "Control Base",
      description:
        "A highly secure and scalable web application developed for the Government of Bahamas. Built using Node.js, React.js, and MySQL, it provides a full-stack solution with robust security measures to manage sensitive government operations. Deployed and managed using AWS infrastructure.",
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "React.js", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { stars: 203, forks: 91 },
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-cyan-400 text-sm flex items-center space-x-1">
                      <Star size={14} />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-blue-400 text-sm flex items-center space-x-1">
                      <GitBranch size={14} />
                      <span>{project.stats.forks}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-sm rounded-full border border-gray-600 hover:border-cyan-400/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">
            Other <span className="text-cyan-400">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-cyan-400" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitBranch size={14} className="text-blue-400" />
                    <span>{project.stats.forks}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded border border-gray-600">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
