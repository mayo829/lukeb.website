'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/led_chessboard/IMG_9463.jpg', alt: 'Gallery Image 1' },
    { src: '/led_chessboard/IMG_9464.jpg', alt: 'Gallery Image 2' },
    { src: '/led_chessboard/IMG_9467.jpg', alt: 'Gallery Image 3' },
    { src: '/led_chessboard/pcb.png', alt: 'Gallery Image 4' },
    { src: '/led_chessboard/pcv_view.png', alt: 'Gallery Image 5' }
  ];

  return (
    <>
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-inter text-4xl md:text-5xl font-bold mb-16 text-center text-white"
        >
          LED Chessboard
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative w-full h-64 bg-zinc-900"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover w-full h-full"
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full size image"
                fill
                className="object-contain"
                sizes="100vw"
              />
              
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}