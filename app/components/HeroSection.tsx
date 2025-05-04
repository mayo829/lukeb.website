'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex items-center justify-center relative overflow-hidden bg-[#000000]"
    >
      {/* Restored Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0d0d0d" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGradient)" />

          {!isMobile && [...Array(30)].map((_, i) => {
            const y = 50 + i * 40;
            const opacity = Math.min(0.15 - i * 0.006, 0.12);
            const duration = 20 + i * 1.5;
            
            return (
              <g key={i} transform="rotate(30 720 450)">
                <motion.path
                  d={`M0,${y} Q360,${y - 60} 720,${y} T1440,${y}`}
                  fill="none"
                  stroke={`rgba(255,255,255,${opacity.toFixed(3)})`}
                  strokeWidth="1.5"
                  initial={{ x: 0 }}
                  animate={{ x: -1440 }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ 
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                />
                <motion.path
                  d={`M0,${y} Q360,${y - 60} 720,${y} T1440,${y}`}
                  fill="none"
                  stroke={`rgba(255,255,255,${opacity.toFixed(3)})`}
                  strokeWidth="1.5"
                  initial={{ x: 1440 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ 
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Luke Brzozowski
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-8 px-4"
        >
          Computer Engineer
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <a 
            href="https://github.com/mayo829" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-cyan-900/40 hover:bg-cyan-800/60 rounded-full transition-colors duration-100 border border-cyan-800/50 hover:border-cyan-400/50"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/luke-brzozowski-03b1a5258/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-cyan-900/40 hover:bg-cyan-800/60 rounded-full transition-colors duration-100 border border-cyan-800/50 hover:border-cyan-400/50"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
}