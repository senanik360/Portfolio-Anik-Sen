"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download } from 'lucide-react';
import { personalInfo } from '@/lib/data/personal';
import { education } from '@/lib/data/education';
import { useState, useEffect } from 'react';

export default function AboutPage() {
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
    { x: 550, y: 600, delay: 7 }
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
    { x: -125, y: 0, delay: 2.7 },
    { x: 125, y: 0, delay: 3.0 },
    { x: -150, y: 0, delay: 3.3 }
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
            {/* Name with Neon Effect */}
            <div className="relative mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
                About {personalInfo.name}
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

            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Graduate Research Assistant passionate about advancing Information Security through innovative research and cutting-edge technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Profile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              {/* Profile Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                {/* Avatar */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
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
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {personalInfo.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {personalInfo.title}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={personalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={personalInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={personalInfo.socialLinks.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-600">Malaysia</div>
                        <div className="text-gray-700">{personalInfo.phones.malaysia}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-600">Bangladesh</div>
                        <div className="text-gray-700">{personalInfo.phones.bangladesh}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{personalInfo.location}</span>
                  </div>
                </div>

                {/* CV Download */}
                <div className="text-center">
                  <a
                    href="/Academic_CV___ANIK_SEN.pdf"
                    download
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-12"
            >
              {/* About Me */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">About Me</h3>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    {personalInfo.about}
                  </p>
                </div>
              </div>

              {/* Research Interests */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Interests</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {personalInfo.researchInterests.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{interest}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Current Education */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Education</h3>
                {education.filter(edu => edu.current).map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg p-6 mb-6"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600">{edu.institution}</p>
                        <p className="text-gray-500 text-sm">{edu.location}</p>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          Current Program
                        </span>
                      </div>
                    </div>
                    {edu.thesis && (
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Research Focus</h5>
                        <p className="text-gray-700 italic">"{edu.thesis}"</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
