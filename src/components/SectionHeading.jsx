import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SectionHeading = ({ icon: Icon, title, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <Icon className="w-8 h-8 text-cyan-500" />
        <h2 className="text-5xl font-black tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-gray-500 text-lg font-mono">{subtitle}</p>
      )}
    </motion.div>
  );
};


export default SectionHeading