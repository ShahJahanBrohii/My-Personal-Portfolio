import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

      <div className="relative p-8">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
            <project.icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-gray-700 rounded-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-gray-700 rounded-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all"
              >
                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-white/5 border border-gray-700 rounded-full text-xs font-mono text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default  ProjectCard