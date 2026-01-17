import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillIcon = ({ name, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative px-6 py-4 bg-gradient-to-br from-white/5 to-white/[0.02] border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
    >
      <span className="text-gray-300 font-mono text-sm group-hover:text-cyan-400 transition-colors">
        {name}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
    </motion.div>
  );
};



export default SkillIcon