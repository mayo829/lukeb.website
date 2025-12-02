'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectsPage() {

  const categories = [
    {
      name: 'Web Development',
      slug: 'web-dev',
      count: 12,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5h18M3 12h18M3 19h18"
          />
        </svg>
      )
    },
    {
      name: 'AI / Machine Learning',
      slug: 'ai-ml',
      count: 7,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6v6l4 2"
          />
          <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        </svg>
      )
    },
    {
      name: 'Mobile Apps',
      slug: 'mobile',
      count: 5,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="7" y="2" width="10" height="20" rx="2" ry="2" strokeWidth={1.5}/>
          <circle cx="12" cy="18" r="1" />
        </svg>
      )
    },
    {
      name: 'Hardware / Embedded',
      slug: 'embedded',
      count: 4,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth={1.5} d="M12 2v20M2 12h20" />
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
        Project Categories
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 hover:border-zinc-600 hover:bg-zinc-900/70 transition-all duration-300"
          >
            {/* Corner dots */}
            <div className="absolute top-3 left-3 w-1 h-1 bg-zinc-600 rounded-full"></div>
            <div className="absolute top-3 right-3 w-1 h-1 bg-zinc-600 rounded-full"></div>
            <div className="absolute bottom-3 left-3 w-1 h-1 bg-zinc-600 rounded-full"></div>
            <div className="absolute bottom-3 right-3 w-1 h-1 bg-zinc-600 rounded-full"></div>

            <div className="flex flex-col h-full">
              <div className="flex-1">
                <div className="text-zinc-400 group-hover:text-zinc-300 mb-4 flex justify-center">
                  {cat.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white text-center group-hover:text-zinc-100">
                  {cat.name}
                </h3>

                <p className="text-zinc-400 text-sm text-center group-hover:text-zinc-300">
                  {cat.count} related projects
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href={`/projects/${cat.slug}`}
                  className="w-full text-center py-2.5 px-4 bg-transparent border border-zinc-700 text-zinc-300 text-xs font-medium tracking-wider rounded hover:border-zinc-500 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  VIEW PROJECTS
                </Link>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
