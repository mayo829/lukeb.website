'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DocumentsPage() {
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-black to-blue-900/20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Microprocessor Documents
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.file}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                y: -5,
                backgroundColor: 'rgba(34, 211, 238, 0.05)'
              }}
              className="bg-white/5 rounded-xl p-6 border border-cyan-900/30 hover:border-cyan-400/40 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-cyan-400 mb-4">
                  {doc.icon}
                </div>
                <h3 className="text-xl font-semibold text-cyan-100 mb-2">{doc.name}</h3>
                <p className="text-cyan-300 text-sm mb-4">
                  {doc.type} • {doc.size}
                </p>
                <div className="flex gap-4 justify-center">
                  {/* Only show View button for PDF files */}
                  {doc.type === 'PDF' && (
                    <Link
                      href={`/${doc.file}`}
                      target="_blank"
                      className="mt-4 px-6 py-2 bg-cyan-900/40 hover:bg-cyan-800/60 text-cyan-100 rounded-full transition-colors border border-cyan-800/50 hover:border-cyan-400/50 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </Link>
                  )}

                  {/* Always show Download button */}
                  <Link
                    href={`/${doc.file}`}
                    download
                    className="mt-4 px-6 py-2 bg-cyan-900/40 hover:bg-cyan-800/60 text-cyan-100 rounded-full transition-colors border border-cyan-800/50 hover:border-cyan-400/50 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}