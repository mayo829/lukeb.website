'use client';

import { motion } from 'framer-motion';

const skills = ['C/C++', 'Python', 'Bash', 'SystemVerilog', 'TypeScript', 'Git', 'LaTeX', 'Linux', 'Matlab', 'Arduino IDE', 'Docker', 'Verdi', 'SolidWorks', 'Microsoft 365'];

export default function SkillsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 150,
                damping: 10
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(34, 211, 238, 0.15)',
                borderColor: 'rgba(34, 211, 238, 0.5)',
                transition: { duration: 0.1 }
              }}
              className="bg-white/5 rounded-lg p-3 md:p-4 text-center border border-cyan-900/30 hover:border-cyan-400/50 transition-colors duration-100"
            >
              <h3 className="text-sm md:text-base font-medium white whitespace-nowrap">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}