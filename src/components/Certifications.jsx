import React from 'react';
import { FileText, Download, ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Internet Of Things (IOT) Training Program",
      issuer: "Technology Training Institute",
      date: "2019",
      description: "Comprehensive training program covering IoT fundamentals, sensor networks, data analytics, and practical implementation of IoT solutions.",
      skills: ["IoT Architecture", "Sensor Networks", "Data Analytics", "Cloud Integration", "Security"],
      pdfPath: "/iot_certification.pdf",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 2,
      title: "Generative AI Foundations Program",
      issuer: "AI Learning Academy",
      date: "2025",
      description: "Advanced program focusing on generative AI technologies, Prompt Engineering, and practical applications of AI in modern software development.",
      skills: ["Prompt Engineering", "Natural Language Processing", "Computer Vision", "AI Ethics"],
      pdfPath: "/generative_ai_certification.pdf",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const handleDownloadCertification = (pdfPath, title) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCertification = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };

  return (
    <section id="certifications" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} shadow-lg`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 bg-gray-700 px-3 py-1 rounded-full">
                  {cert.date}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  Key Skills Covered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => handleViewCertification(cert.pdfPath)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-300 group"
                >
                  <ExternalLink size={16} />
                  <span>View PDF</span>
                </button>
                <button
                  onClick={() => handleDownloadCertification(cert.pdfPath, cert.title)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                >
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Continuous Learning</h3>
            </div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              I believe in the power of continuous learning and professional development. 
              These certifications represent my commitment to staying current with emerging 
              technologies and expanding my skill set to deliver better solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
