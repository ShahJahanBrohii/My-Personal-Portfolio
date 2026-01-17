const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-gray-800 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <p className="text-gray-500 font-mono text-sm mb-4">
          © 2026 ShahJahan Brohii. Crafted with React, Tailwind & Framer Motion.
        </p>
        <p className="text-gray-600 font-mono text-xs">
          {'<>'} Built with passion for innovation {'</>'}
        </p>
      </div>
    </footer>
  );
};


export default Footer