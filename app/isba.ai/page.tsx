'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LinksPage() {
  const links = [
    {
      name: 'Project GitHub',
      url: 'https://github.com/mayo829/reservation_system',
      description: 'Source code and documentation',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      name: 'Client Website',
      url: 'https://reservation.isba.ai/',
      description: 'One of our clients website',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-inter text-4xl md:text-5xl font-bold mb-16 text-center text-white"
      >
        Project Links
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {links.map((link, index) => (
          <motion.div
            key={link.url}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 hover:border-zinc-600 transition-all duration-300 hover:bg-zinc-900/70"
          >
            {/* Corner dots */}
            <div className="absolute top-3 left-3 w-1 h-1 bg-zinc-600 rounded-full"></div>
            <div className="absolute top-3 right-3 w-1 h-1 bg-zinc-600 rounded-full"></div>
            <div className="absolute bottom-3 left-3 w-1 h-1 bg-zinc-600 rounded-full"></div>
            <div className="absolute bottom-3 right-3 w-1 h-1 bg-zinc-600 rounded-full"></div>
            
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <div className="text-zinc-400 group-hover:text-zinc-300 mb-4 flex justify-center">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-zinc-100 text-center">
                  {link.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 group-hover:text-zinc-300 text-center">
                  {link.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 px-4 bg-transparent border border-zinc-700 text-zinc-300 text-xs font-medium tracking-wider rounded hover:border-zinc-500 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  VISIT LINK
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}