'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DocumentsClient() {
  const documents = [
    {
      name: 'Technical Report',
      file: '470_report.pdf',
      type: 'PDF',
      size: '791 KB',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Project Presentation',
      file: '470_presentation.pptx',
      type: 'PowerPoint',
      size: '14.2 MB',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
        Microprocessor Documents
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.file}
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
                  {doc.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-zinc-100 text-center">
                  {doc.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 group-hover:text-zinc-300 text-center">
                  {doc.type} • {doc.size}
                </p>
              </div>
              
              <div className="flex gap-3 mt-auto">
                {/* Only show View button for PDF files */}
                {doc.type === 'PDF' && (
                  <Link
                    href={`/${doc.file}`}
                    target="_blank"
                    className="flex-1 text-center py-2.5 px-4 bg-transparent border border-zinc-700 text-zinc-300 text-xs font-medium tracking-wider rounded hover:border-zinc-500 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    VIEW
                  </Link>
                )}

                {/* Always show Download button */}
                <Link
                  href={`/${doc.file}`}
                  download
                  className={`${doc.type === 'PDF' ? 'flex-1' : 'w-full'} text-center py-2.5 px-4 bg-transparent border border-zinc-700 text-zinc-300 text-xs font-medium tracking-wider rounded hover:border-zinc-500 hover:text-white transition-all duration-200 flex items-center justify-center gap-2`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  DOWNLOAD
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

