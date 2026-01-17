import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Mail, Download, Github, ChevronRight } from 'lucide-react';


const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Full-Stack Developer', 'MERN Expert', 'AI Enthusiast'];
  const currentRole = roles[roleIndex];
  
  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setText(currentRole.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)'
        }} />
      </div>

      {/* Floating Code Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-500/30 font-mono text-xs"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -20,
              opacity: 0 
            }}
            animate={{ 
              y: window.innerHeight + 20,
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear'
            }}
          >
            {['</>','{}','[]','()','fn','if','>>'][Math.floor(Math.random() * 7)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-cyan-400 font-mono text-sm">Available for opportunities</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-7xl md:text-9xl font-black mb-6 tracking-tighter"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-white via-cyan-400 to-lime-400 bg-clip-text text-transparent">
            Shah Jahan
          </span>
        </motion.h1>

        <motion.div
          className="h-16 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3">
            <Terminal className="w-6 h-6 text-cyan-500" />
            <span className="text-2xl md:text-3xl font-mono text-cyan-400">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </motion.div>

        <motion.p
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Final Year CS Student crafting intelligent solutions at the intersection of 
          <span className="text-cyan-400 font-semibold"> Full-Stack Engineering</span> and 
          <span className="text-lime-400 font-semibold"> Artificial Intelligence</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a 
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-lime-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="/resume.pdf" 
            download
            className="group px-8 py-4 bg-white/5 border border-cyan-500/30 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          
          <a 
            href="https://github.com/shahjahanbrohii" 
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white/5 border border-gray-700 text-gray-300 font-bold rounded-lg hover:bg-white/10 hover:border-gray-600 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero