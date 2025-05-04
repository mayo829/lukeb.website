'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Microprocessor',
    description: 'Synthesizable RISC-V microprocessor with dynamic scheduling',
    image: '/cpu.jpg',
    link: '/end_470_project',
    github: 'https://github.com/mayo829/RISCV_CPU',
  },
  {
    id: 2,
    title: 'Piazza Post Categorizer',
    description: 'Machine Learning based classifier for online forum posts',
    image: '/code.jpg',
    link: 'https://www.example.com',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'NASA Mars Rover (Prototype)',
    description: 'Prototype of NASA Mars Rover with collision avoidance and robotic arm',
    image: '/code.jpg',
    link: 'https://www.example.com',
    github: 'https://github.com',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto bg-gradient-to-b from-black to-blue-900/10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative aspect-video bg-gradient-to-br from-cyan-900/20 to-blue-900/30 rounded-xl overflow-hidden border border-cyan-900/30 hover:border-cyan-400/40"
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover transition-transform group-hover:scale-105" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" /> 
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2 text-cyan-50">{project.title}</h3>
              <p className="text-cyan-100 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <Link 
                  href={project.link || "#"} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-cyan-900/40 hover:bg-cyan-800/60 text-cyan-100 rounded-full transition-colors border border-cyan-800/50 hover:border-cyan-400/50"
                >
                  View Project
                </Link>
                <Link 
                  href={project.github || "#"} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-cyan-900/40 hover:bg-cyan-800/60 text-cyan-100 rounded-full transition-colors border border-cyan-800/50 hover:border-cyan-400/50"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}