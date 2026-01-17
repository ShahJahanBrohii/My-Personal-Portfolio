import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Brain } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Timeline = () => {
  const experiences = [
    {
      year: '2024',
      title: 'Final Year CS Student',
      organization: 'University',
      description: 'Specializing in Artificial Intelligence and Full-Stack Development. Leading multiple ML research projects and building production-grade applications.',
      icon: GraduationCap,
      color: 'cyan'
    },
    {
      year: '2023',
      title: 'Full-Stack Developer',
      organization: 'Freelance Projects',
      description: 'Developed end-to-end MERN stack applications for various clients, implementing real-time features and scalable architectures.',
      icon: Code2,
      color: 'lime'
    },
    {
      year: '2022',
      title: 'ML Research Intern',
      organization: 'Academic Research',
      description: 'Conducted research on computer vision applications in healthcare, focusing on medical image analysis and diagnostic systems.',
      icon: Brain,
      color: 'purple'
    }
  ];

  const colorMap = {
    cyan: 'border-cyan-500 bg-cyan-500',
    lime: 'border-lime-500 bg-lime-500',
    purple: 'border-purple-500 bg-purple-500'
  };

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading 
        icon={Briefcase} 
        title="Journey" 
        subtitle="// Building the future, one line at a time"
      />

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-lime-500 to-purple-500" />

        {experiences.map((exp, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "-100px" });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:gap-8`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                <div className="inline-block px-4 py-2 bg-white/5 border border-gray-700 rounded-full mb-4">
                  <span className="text-cyan-400 font-mono text-sm">{exp.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{exp.organization}</p>
                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
              </div>

              {/* Center Icon */}
              <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full ${colorMap[exp.color]} border-4 border-gray-900 flex items-center justify-center z-10`}>
                <exp.icon className="w-8 h-8 text-gray-900" />
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline