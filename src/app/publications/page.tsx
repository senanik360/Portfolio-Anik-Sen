"use client";

import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, ExternalLink, Calendar, Users } from 'lucide-react';
import { publications } from '@/lib/data/publications';
import { useState, useEffect, useMemo } from 'react';

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Predefined particle positions to avoid hydration mismatch
  const backgroundParticles = [
    { x: 100, y: 150, delay: 0 },
    { x: 300, y: 200, delay: 0.5 },
    { x: 500, y: 100, delay: 1 },
    { x: 700, y: 300, delay: 1.5 },
    { x: 900, y: 250, delay: 2 },
    { x: 1100, y: 180, delay: 2.5 },
    { x: 200, y: 400, delay: 3 },
    { x: 400, y: 350, delay: 3.5 },
    { x: 600, y: 450, delay: 4 },
    { x: 800, y: 380, delay: 4.5 },
    { x: 1000, y: 420, delay: 5 },
    { x: 1200, y: 320, delay: 5.5 }
  ];

  const nameParticles = [
    { x: -100, y: 0, delay: 0 },
    { x: -50, y: 0, delay: 0.3 },
    { x: 0, y: 0, delay: 0.6 },
    { x: 50, y: 0, delay: 0.9 },
    { x: 100, y: 0, delay: 1.2 },
    { x: -75, y: 0, delay: 1.5 },
    { x: -25, y: 0, delay: 1.8 },
    { x: 25, y: 0, delay: 2.1 },
    { x: 75, y: 0, delay: 2.4 },
    { x: 125, y: 0, delay: 2.7 }
  ];

  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.venue.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || pub.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  const publicationTypes = [
    { id: 'all', name: 'All Publications', count: publications.length },
    { id: 'journal', name: 'Journal Papers', count: publications.filter(p => p.type === 'journal').length },
    { id: 'conference', name: 'Conference Papers', count: publications.filter(p => p.type === 'conference').length },
    { id: 'under-publication', name: 'Under Publication', count: publications.filter(p => p.type === 'under-publication').length },
    { id: 'submitted', name: 'Submitted', count: publications.filter(p => p.type === 'submitted').length },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
        {/* Floating Particles Background */}
        {isClient && (
          <div className="absolute inset-0 overflow-hidden">
            {backgroundParticles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                initial={{
                  x: particle.x,
                  y: particle.y,
                }}
                animate={{
                  x: particle.x + (Math.random() * 200 - 100),
                  y: particle.y + (Math.random() * 200 - 100),
                }}
                transition={{
                  duration: 10 + Math.random() * 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                  delay: particle.delay
                }}
              />
            ))}
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            {/* Title with Neon Effect */}
            <div className="relative mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
                Research Publications
              </h1>

              {/* Neon Glow Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 blur-sm animate-pulse"></div>
              </div>

              {/* Floating Particles Under Title */}
              {isClient && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-8">
                  {nameParticles.map((particle, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      initial={{
                        x: particle.x,
                        y: 0,
                        opacity: 0,
                      }}
                      animate={{
                        x: particle.x + (Math.random() * 100 - 50),
                        y: 20,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A comprehensive collection of my research contributions in Information Security and Machine Learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search publications by title or venue..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {publicationTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${selectedType === type.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {type.name} ({type.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Publication Type */}
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                    {pub.type.replace('-', ' ')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-3">
                  {pub.title}
                </h3>

                {/* Venue and Year */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{pub.venue}, {pub.year}</span>
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <span className="text-sm">View</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Status */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${pub.status === 'Published' ? 'bg-green-100 text-green-800' :
                    pub.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                    {pub.status}
                  </span>
                </div>

                {/* Indexing */}
                {pub.indexing && pub.indexing.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Indexed in:</p>
                    <div className="flex flex-wrap gap-1">
                      {pub.indexing.slice(0, 3).map((index, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {index}
                        </span>
                      ))}
                      {pub.indexing.length > 3 && (
                        <span className="text-xs text-gray-500">+{pub.indexing.length - 3} more</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Abstract */}
                {pub.abstract && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View Abstract
                    </summary>
                    <p className="mt-2 text-sm text-gray-600 italic">
                      {pub.abstract}
                    </p>
                  </details>
                )}
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredPublications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No publications found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Publications Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Publications Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Research contributions across journals, conferences, and ongoing projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {publications.filter(p => p.type === 'journal').length}
              </h3>
              <p className="text-gray-600">Journal Papers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {publications.filter(p => p.type === 'conference').length}
              </h3>
              <p className="text-gray-600">Conference Papers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {publications.filter(p => p.type === 'under-publication').length}
              </h3>
              <p className="text-gray-600">Under Publication</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {publications.filter(p => p.type === 'submitted').length}
              </h3>
              <p className="text-gray-600">Submitted</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
