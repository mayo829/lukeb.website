'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { GL } from "./gl";
import { useEffect, useState } from 'react';

export default function HeroSection() {
  // const [isMobile, setIsMobile] = useState(false);
  const [hovering, setHovering] = useState(false);
  
  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform motion values for tilt
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    // const checkMobile = () => {
    //   setIsMobile(window.innerWidth < 768);
    // };
    
    // checkMobile();
    // window.addEventListener('resize', checkMobile);
    
    // Track cursor position
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth - 0.5);
      y.set(e.clientY / window.innerHeight - 0.5);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      // window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex items-center justify-center relative overflow-hidden bg-[#000000]"
      style={{ touchAction: 'pan-y' }} // Add this to allow scrolling
    >
      <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <GL hovering={hovering} />
      </div>

      {/* Content remains identical on all devices */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-inter font-bold mb-6 bg-clip-text text-white"
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
            transition: "transform 0.1s linear"
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          Luke Brzozowski
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-purple-bright mb-8 px-4 font-mono"
        >
          Computer Engineer & Entrepreneur
        </motion.p>
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