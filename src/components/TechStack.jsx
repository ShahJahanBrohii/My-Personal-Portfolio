import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SkillIcon from './SkillIcon';

const TechStack = () => {
  const skills = {
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Redux'],
    backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    ai: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'Computer Vision']
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading 
        icon={Code2} 
        title="Tech Arsenal" 
        subtitle="// Building with cutting-edge technologies"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {/* Frontend Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent border border-cyan-500/30 rounded-2xl backdrop-blur-sm overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          <Code2 className="w-12 h-12 text-cyan-400 mb-4 relative z-10" />
          <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Frontend</h3>
          <div className="flex flex-wrap gap-3 relative z-10">
            {skills.frontend.map((skill, i) => (
              <SkillIcon key={skill} name={skill} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Backend Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-8 bg-gradient-to-br from-lime-500/10 via-transparent to-transparent border border-lime-500/30 rounded-2xl backdrop-blur-sm overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          <Database className="w-12 h-12 text-lime-400 mb-4 relative z-10" />
          <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Backend</h3>
          <div className="flex flex-wrap gap-3 relative z-10">
            {skills.backend.map((skill, i) => (
              <SkillIcon key={skill} name={skill} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* AI/ML Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative p-8 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent border border-purple-500/30 rounded-2xl backdrop-blur-sm overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          <Brain className="w-12 h-12 text-purple-400 mb-4 relative z-10" />
          <h3 className="text-2xl font-bold text-white mb-6 relative z-10">AI / ML</h3>
          <div className="flex flex-wrap gap-3 relative z-10">
            {skills.ai.map((skill, i) => (
              <SkillIcon key={skill} name={skill} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default TechStack