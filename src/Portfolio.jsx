import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Research from "./components/Research";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Custom Font Loading */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=JetBrains+Mono:wght@400;600&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #84cc16);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #65a30d);
        }
      `}</style>

    <Hero />

<Projects />
<TechStack />
<Timeline />
<Research />
        <Contact />
    <Footer />
    </div>
  );
}