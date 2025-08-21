'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C/C++', 'Python', 'TypeScript', 'Bash', 'SQL', 'SystemVerilog', 'Excel VBA', 'MATLAB']
  },
  {
    title: 'Technologies',
    skills: ['Next.js', 'React', 'LangGraph', 'OpenAI API', 'Claude API', 'Docker', 'Arch Linux', 'Ubuntu', 'ESP32', 'Raspberry Pi', 'CAN bus', '3D printing', 'OOP', 'Flow Simulations', 'Algo Optimizations', 'Soldering']
  },
  {
    title: 'Tools',
    skills: ['Git', 'Jira', 'Verdi', 'SolidWorks', 'Simulink', 'LaTeX', 'Arduino IDE', 'Oscilloscope', 'Tinkercad']
  },
  {
    title: 'Interests',
    skills: ['AI', 'Software Engineering', 'Systems Engineering', 'Game development', 'Performance Vehicles', 'Psychology', 'Rock Climbing', 'Nature']
  }
];

export default function SkillsSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-blue-900/5">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="font-inter text-4xl md:text-5xl font-bold mb-16 text-center text-white"
        >
          Expertise
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              {/* Category Title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 + 0.1 }}
                className="text-xl md:text-2xl font-semibold text-cyan-400 text-center md:text-left"
              >
                {category.title}
              </motion.h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.05,
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
                    className="group relative bg-white/5 rounded-lg p-3 md:p-4 text-center border border-cyan-900/30 hover:border-cyan-400/50 transition-colors duration-100"
                  >
                    <h4 className="text-sm md:text-sm font-medium text-white whitespace-nowrap group-hover:text-cyan-200">
                      {skill}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}