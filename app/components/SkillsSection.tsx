'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C/C++', 'Python', 'TypeScript', 'Bash', 'SQL', 'SystemVerilog', 'MATLAB']
  },
  {
    title: 'Technologies',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'LangGraph', 'OpenAI API', 'Claude API', 'Docker', 'Arch Linux', 'Ubuntu', 'ESP32', 'Raspberry Pi', 'CAN bus', '3D printing', 'OOP', 'Algo Optimizations', 'Flow Simulations', 'Soldering']
  },
  {
    title: 'Tools',
    skills: ['Git', 'Jira', 'Verdi', 'Tinkercad', 'SolidWorks', 'Simulink', 'LaTeX', 'Arduino IDE', 'Oscilloscope']
  },
  {
    title: 'Interests',
    skills: ['AI', 'Software Engineering', 'Systems Engineering', 'Game development', 'Web Design', 'Performance Vehicles', 'Psychology', 'Rock Climbing', 'Nature', 'Art']
  }
];

export default function SkillsSection() {
  return (
    <section className="py-12 md:py-20 bg-purple-bright/7">
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
                className="text-xl md:text-2xl font-semibold text-purple-bright text-center md:text-left"
              >
                {category.title}
              </motion.h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      borderColor: "rgb(63, 63, 70)"
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      borderColor: "rgb(63, 63, 70)"
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(191, 64, 255, 0.15)",
                      borderColor: "#bf40ff"
                    }}
                    transition={{ 
                      duration: 0.15,
                    }}
                    className="group relative bg-white/5 rounded-lg p-3 md:p-4 text-center border"
                  >
                    <h4 className="text-sm font-medium text-white whitespace-nowrap">
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
