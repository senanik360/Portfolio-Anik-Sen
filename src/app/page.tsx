"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download, ExternalLink, Award, BookOpen, Users } from 'lucide-react';
import { personalInfo, heroStats, tagline } from '@/lib/data/personal';
import { publications } from '@/lib/data/publications';
import { awards } from '@/lib/data/awards';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 });
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
    { x: 1200, y: 320, delay: 5.5 },
    { x: 150, y: 550, delay: 6 },
    { x: 350, y: 500, delay: 6.5 },
    { x: 550, y: 600, delay: 7 },
    { x: 750, y: 550, delay: 7.5 },
    { x: 950, y: 650, delay: 8 },
    { x: 1150, y: 580, delay: 8.5 },
    { x: 250, y: 700, delay: 9 },
    { x: 450, y: 750, delay: 9.5 }
  ];

  const nameParticles = [
    { x: -150, y: 0, delay: 0 },
    { x: -100, y: 0, delay: 0.3 },
    { x: -50, y: 0, delay: 0.6 },
    { x: 0, y: 0, delay: 0.9 },
    { x: 50, y: 0, delay: 1.2 },
    { x: 100, y: 0, delay: 1.5 },
    { x: 150, y: 0, delay: 1.8 },
    { x: -125, y: 0, delay: 2.1 },
    { x: -75, y: 0, delay: 2.4 },
    { x: -25, y: 0, delay: 2.7 },
    { x: 25, y: 0, delay: 3.0 },
    { x: 75, y: 0, delay: 3.3 },
    { x: 125, y: 0, delay: 3.6 },
    { x: -175, y: 0, delay: 3.9 },
    { x: 175, y: 0, delay: 4.2 }
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
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - ${personalInfo.title}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                {/* Subtle glow effect around the image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl -z-10"></div>
              </div>
            </motion.div>

            {/* Name with Neon Effect */}
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 relative z-10">
                {personalInfo.name}
              </h1>

              {/* Neon Glow Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 blur-sm animate-pulse"></div>
              </div>

              {/* Floating Particles Under Name */}
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

            <p className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
              {personalInfo.title}
            </p>
            <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-8">
              {tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="/ANIK_SEN.pdf"
                download="Anik_Sen_CV.pdf"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Publications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recent research contributions in Information Security and Machine Learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.slice(0, 3).map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                    {pub.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-3">
                  {pub.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {pub.authors}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{pub.venue}, {pub.year}</span>
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/publications"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Recent Awards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Academic achievements and professional recognition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.slice(0, 3).map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-600 uppercase tracking-wide">
                    {award.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {award.organization}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{award.year}</span>
                  <span className="text-sm font-medium text-gray-700">
                    {award.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/awards"
              className="inline-flex items-center space-x-2 bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200"
            >
              <span>View All Awards</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Research Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advancing Information Security through innovative research and cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personalInfo.researchInterests.map((interest, index) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {interest}
                </h3>
                <p className="text-gray-600 text-sm">
                  Innovative research and development
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
