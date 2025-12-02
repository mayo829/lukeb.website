'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type Project = {
    name: string;
    mainImage: string;
    description: string;
    printTime: string;
    material: string;
    images: string[];
};

export default function CADClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      name: 'Custom Phone Stand',
      mainImage: '/images/phone-stand-main.jpg',
      description: 'Adjustable phone stand with cable management',
      printTime: '4 hours',
      material: 'PLA',
      images: [
        '/images/phone-stand-1.jpg',
        '/images/phone-stand-2.jpg',
        '/images/phone-stand-3.jpg',
        '/images/phone-stand-4.jpg'
      ]
    },
    {
      name: 'Miniature Chess Set',
      mainImage: '/images/chess-set-main.jpg',
      description: 'Detailed chess pieces with custom board design',
      printTime: '12 hours',
      material: 'PETG',
      images: [
        '/images/chess-set-1.jpg',
        '/images/chess-set-2.jpg',
        '/images/chess-set-3.jpg',
        '/images/chess-set-4.jpg',
        '/images/chess-set-5.jpg'
      ]
    },
    {
      name: 'Cable Organizer',
      mainImage: '/images/cable-organizer-main.jpg',
      description: 'Modular cable management system',
      printTime: '2 hours',
      material: 'PLA',
      images: [
        '/images/cable-organizer-1.jpg',
        '/images/cable-organizer-2.jpg',
        '/images/cable-organizer-3.jpg'
      ]
    },
    {
      name: 'Desk Lamp Base',
      mainImage: '/images/desk-lamp-main.jpg',
      description: 'Weighted base for adjustable LED strip',
      printTime: '6 hours',
      material: 'ABS',
      images: [
        '/images/desk-lamp-1.jpg',
        '/images/desk-lamp-2.jpg',
        '/images/desk-lamp-3.jpg',
        '/images/desk-lamp-4.jpg'
      ]
    },
    {
      name: 'Plant Pot Holders',
      mainImage: '/images/plant-holders-main.jpg',
      description: 'Decorative hanging planters with drainage',
      printTime: '3 hours',
      material: 'PETG',
      images: [
        '/images/plant-holders-1.jpg',
        '/images/plant-holders-2.jpg',
        '/images/plant-holders-3.jpg'
      ]
    },
    {
      name: 'Keyboard Wrist Rest',
      mainImage: '/images/wrist-rest-main.jpg',
      description: 'Ergonomic wrist support with textured surface',
      printTime: '5 hours',
      material: 'TPU',
      images: [
        '/images/wrist-rest-1.jpg',
        '/images/wrist-rest-2.jpg',
        '/images/wrist-rest-3.jpg',
        '/images/wrist-rest-4.jpg'
      ]
    }
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

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
          3D Printing Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all duration-300 hover:bg-zinc-900/70 cursor-pointer"
            >
              {/* Corner dots */}
              <div className="absolute top-3 left-3 w-1 h-1 bg-zinc-600 rounded-full z-10"></div>
              <div className="absolute top-3 right-3 w-1 h-1 bg-zinc-600 rounded-full z-10"></div>
              <div className="absolute bottom-3 left-3 w-1 h-1 bg-zinc-600 rounded-full z-10"></div>
              <div className="absolute bottom-3 right-3 w-1 h-1 bg-zinc-600 rounded-full z-10"></div>
              
              {/* Project Image */}
              <div className="relative h-48 w-full bg-zinc-800">
                <Image
                  src={project.mainImage}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    if (target.nextSibling) {
                      (target.nextSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback placeholder */}
                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center" style={{display: 'none'}}>
                  <svg className="w-16 h-16 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                {/* Image count overlay */}
                <div className="absolute top-2 right-2 bg-black/70 text-zinc-300 px-2 py-1 rounded-md text-xs z-10">
                  {project.images.length} photos
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col h-full p-8">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-zinc-100 mb-4">
                    {project.name}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 group-hover:text-zinc-300">
                    {project.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="flex justify-between text-xs text-zinc-400 mb-8 group-hover:text-zinc-300">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {project.printTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      {project.material}
                    </span>
                  </div>
                </div>

                {/* View Project Button */}
                <button
                  onClick={() => openProject(project)}
                  className="w-full text-center py-2.5 px-4 bg-transparent border border-zinc-700 text-zinc-300 text-xs font-medium tracking-wider rounded hover:border-zinc-500 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  VIEW PROJECT
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-100">{selectedProject.name}</h3>
                    <p className="text-cyan-300 text-sm mt-1">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={closeProject}
                    className="text-gray-400 hover:text-white p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="relative">
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      if (target.nextSibling) {
                        (target.nextSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback for missing images */}
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center" style={{display: 'none'}}>
                    <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              {selectedProject.images.length > 1 && (
                <div className="p-4 bg-gray-800">
                  <div className="flex gap-2 overflow-x-auto">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                          index === currentImageIndex ? 'border-cyan-400' : 'border-gray-600'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

