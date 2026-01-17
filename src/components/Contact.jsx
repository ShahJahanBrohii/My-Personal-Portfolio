import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeading 
        icon={Mail} 
        title="Let's Connect" 
        subtitle="// Ready to build something amazing"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative p-8 md:p-12 bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-cyan-500/30 rounded-2xl backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        {/* Glassmorphism Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
        
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 font-mono text-sm mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 font-mono text-sm mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white transition-all"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-400 font-mono text-sm mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="6"
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white resize-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-lime-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status === 'sending' ? (
              <>Processing...</>
            ) : status === 'success' ? (
              <>Message Sent! ✓</>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center gap-6 mt-12"
      >
        <a 
          href="https://github.com/shahjahanbrohii"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/5 border border-gray-700 rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
        >
          <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
        </a>
        <a 
          href="https://linkedin.com/in/shahjahanbrohii"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white/5 border border-gray-700 rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
        >
          <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
        </a>
        <a 
          href="mailto:contact@shahjahanbrohii.dev"
          className="p-4 bg-white/5 border border-gray-700 rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
        >
          <Mail className="w-6 h-6 text-gray-400 group-hover:text-cyan-400" />
        </a>
      </motion.div>
    </section>
  );
};


export default Contact