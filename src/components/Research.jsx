import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Research = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading 
        icon={Award} 
        title="Research & Publications" 
        subtitle="// Exploring the frontiers of AI/ML"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative p-12 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-transparent border border-purple-500/30 rounded-2xl backdrop-blur-sm overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center">
          <FileText className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Deep Learning in Healthcare
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            Currently working on research papers focusing on computer vision applications in medical diagnostics, 
            specifically dental pathology detection and blood compatibility prediction systems.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 border border-purple-500/50 rounded-full">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-300 font-mono text-sm">Research In Progress</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Research