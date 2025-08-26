"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award, ExternalLink } from 'lucide-react';
import { experiences } from '@/lib/data/experience';
import { useState, useEffect } from 'react';

export default function ExperiencePage() {
  const [, setWindowDimensions] = useState({ width: 1200, height: 800 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
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
                Professional Experience
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
              A journey through my professional career, research positions, and academic contributions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${experience.current ? 'bg-green-500' : 'bg-blue-500'
                    }`}>
                    {experience.current && (
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="ml-16 bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Building className="w-4 h-4" />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{experience.duration}</span>
                        </div>
                        {experience.current && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                            Current Position
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {experience.achievements && experience.achievements.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-3">
                              <Award className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones and achievements throughout my professional journey
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
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4+</h3>
              <p className="text-gray-600">Professional Roles</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Research</h3>
              <p className="text-gray-600">Assistant Positions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2+ Years</h3>
              <p className="text-gray-600">Professional Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">International</h3>
              <p className="text-gray-600">Work Experience</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
