import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8">
                Let's <span className="text-cyan-400">Connect</span>
              </h3>
              
              <div className="space-y-6">
                <div className="group flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">Email</h4>
                    <p className="text-gray-400">vikastomar1308@gmail.com</p>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">Phone</h4>
                    <p className="text-gray-400">+91 9644450770</p>
                  </div>
                </div>
                
                <div className="group flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">Location</h4>
                    <p className="text-gray-400">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-medium text-white mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Vikas0123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/50 backdrop-blur-sm text-gray-300 p-4 rounded-xl border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vikas-tomar-a9756520a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-blue-600/20 backdrop-blur-sm text-blue-400 p-4 rounded-xl border border-blue-600/30 hover:border-blue-500 hover:bg-blue-600/30 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-blue-300 transition-colors" />
                </a>
                <a
                  href="https://twitter.com/vikastomar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-cyan-600/20 backdrop-blur-sm text-cyan-400 p-4 rounded-xl border border-cyan-600/30 hover:border-cyan-500 hover:bg-cyan-600/30 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-6 h-6 group-hover:text-cyan-300 transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="w-6 h-6 text-cyan-400" />
                <h4 className="text-lg font-semibold text-white">Quick Response</h4>
              </div>
              <p className="text-gray-300 text-sm">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-400"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 font-medium shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;