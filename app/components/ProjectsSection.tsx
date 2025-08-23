'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'AgenticFruit',
    description: 'AI Coding Agent For Web Applications with intelligent code generation and automated testing capabilities.',
    link: 'https://www.agenticfruit.com/',
    github: 'https://github.com/mayo829/AICoder',
    buttonText: 'USE NOW',
    image: '/agenticfruit.png' // Add your image path here
  },
  {
    id: 2,
    title: 'isba.ai',
    description: 'End-to-end AI hotel administrator that streamlines reservations, guest services, and operational management.',
    link: '/isba.ai',
    github: 'https://github.com/mayo829/reservation_system',
    buttonText: 'EXPLORE',
    image: '/lisboa_hotels.png' // Add your image path here
  },
  {
    id: 3,
    title: 'CAD & 3D Printing',
    description: 'Advanced CAD modeling projects and 3D printing designs covering mechanical components and prototypes.',
    link: '/CAD',
    github: 'https://github.com/mayo829/3d_printing',
    buttonText: 'VIEW DESIGNS',
    image: '/3d_printing.jpg' // Add your image path here
  },
  {
    id: 4,
    title: 'Microprocessor',
    description: 'Synthesizable RISC-V microprocessor with dynamic scheduling and advanced pipeline architecture.',
    link: '/470_project',
    image: '/cpu.jpg',
    github: 'https://github.com/mayo829/RISCV_CPU',
    buttonText: 'LEARN MORE'
  },
  {
    id: 5,
    title: 'Piazza Post Categorizer',
    description: 'Machine Learning based classifier for online forum posts using natural language processing techniques.',
    link: 'https://www.example.com',
    github: 'https://github.com/mayo829/piazza_post_categorizer',
    buttonText: 'VIEW PROJECT',
    image: '/code.jpg' // Add your image path here
  },
  {
    id: 6,
    title: 'NASA Mars Rover',
    description: 'Prototype of NASA Mars Rover with collision avoidance algorithms and precision robotic arm control.',
    link: 'https://www.example.com',
    github: 'https://github.com/mayo829',
    buttonText: 'DISCOVER',
    image: '/arduino.jpg' // Add your image path here
  },
  {
    id: 7,
    title: 'Accelerometer Data Logger',
    description: 'Real-time 3-axis acceleration data logger with cloud upload',
    image: '/circuit.jpg',
    link: 'https://www.example.com',
    github: 'https://github.com/mayo829',
    buttonText: 'VIEW PROJECT' // Add this line
  },
  {
    id: 8,
    title: 'Venturi Design and Simulation',
    description: 'CFD simulations of variable Venturi geometries for optimized airflow',
    image: '/CFD.jpg',
    link: 'https://www.solidworks.com/',
    github: 'https://github.com/mayo829',
    buttonText: 'VIEW SIMULATION' // Add this line
  }
];

export default function ProjectsSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-bright/7">
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-inter text-4xl md:text-5xl font-bold mb-16 text-center text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all duration-300 hover:bg-zinc-900/70"
            >
              {/* Corner dots like in xAI design */}
              <div className="absolute top-3 left-3 w-1 h-1 bg-zinc-600 rounded-full z-10"></div>
              <div className="absolute top-3 right-3 w-1 h-1 bg-zinc-600 rounded-full z-10"></div>
              <div className="absolute bottom-3 left-3 w-1 h-1 bg-zinc-600 rounded-full z-10"></div>
              <div className="absolute bottom-3 right-3 w-1 h-1 bg-zinc-600 rounded-full z-10"></div>
              
              {/* Project Image */}
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
                </div>
              )}
              
              <div className="flex flex-col p-8" style={{ minHeight: 'calc(100% - 192px)' }}>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4 text-purple-bright group-hover:text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 group-hover:text-zinc-300">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Link
                    href={project.link || "#"}
                    target={project.link?.startsWith('http') ? "_blank" : "_self"}
                    rel={project.link?.startsWith('http') ? "noopener noreferrer" : ""}
                    className="flex-1 text-center py-2.5 px-4 bg-transparent border border-zinc-700 text-zinc-300 text-xs font-medium tracking-wider rounded hover:border-zinc-500 hover:text-white transition-all duration-200"
                  >
                    {project.buttonText}
                    <svg className="w-3 h-3 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <Link
                    href={project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-transparent border border-zinc-700 text-zinc-400 rounded hover:border-zinc-500 hover:text-white transition-all duration-200"
                    title="View on GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}