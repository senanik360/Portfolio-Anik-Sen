"use client";

import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { awards } from '@/lib/data/awards';
import { useState, useEffect } from 'react';

// Dean's List Slideshow Component
function DeansListSlideshow({ images, onImageClick }: { images: string[], onImageClick: (imagePath: string, index: number) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mb-4">
      <div className="relative group">
        <div className="overflow-hidden rounded-lg shadow-md">
          {/* Main slideshow container */}
          <div className="relative h-64 sm:h-80">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  scale: currentSlide === index ? 1 : 1.05
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 cursor-pointer"
                onClick={() => onImageClick(image, index)}
              >
                <img
                  src={image}
                  alt={`Dean's List Honor - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-black/70 transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-black/70 transition-all duration-300 z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Image info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="font-semibold text-sm">Dean&apos;s List Honor</h4>
              <p className="text-xs opacity-90">5 Consecutive Times Achievement - Image {currentSlide + 1} of {images.length}</p>
            </div>

            {/* Click indicator */}
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to enlarge
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AwardsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const getAwardIcon = (category: string) => {
    switch (category) {
      case 'academic':
        return <Trophy className="w-6 h-6 text-yellow-600" />;
      case 'research':
        return <Star className="w-6 h-6 text-blue-600" />;
      case 'competition':
        return <Medal className="w-6 h-6 text-green-600" />;
      case 'scholarship':
        return <Award className="w-6 h-6 text-purple-600" />;
      default:
        return <Award className="w-6 h-6 text-gray-600" />;
    }
  };

  // Filter out competition awards (they're now in achievements page)
  const nonCompetitionAwards = awards.filter(award => award.category !== 'competition');

  const filteredAwards = selectedCategory === 'all'
    ? nonCompetitionAwards
    : nonCompetitionAwards.filter(award => award.category === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Awards', count: nonCompetitionAwards.length },
    { id: 'academic', name: 'Academic', count: awards.filter(a => a.category === 'academic').length },
    { id: 'scholarship', name: 'Scholarship', count: awards.filter(a => a.category === 'scholarship').length },
  ];

  // Dean's List Honor images
  const deansListImages = [
    "/Deans List Honor 1.jpg",
    "/Deans List Honor 2.jpg"
  ];

  const openImageModal = (imagePath: string, initialIndex: number = 0) => {
    setSelectedImage(imagePath);
    setCurrentImageIndex(initialIndex);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    if (selectedImage === "/Magna Cum Laude.jpeg" || selectedImage === "/Emergin Leader Award 2024.jpg") return;
    setCurrentImageIndex((prev) => (prev + 1) % deansListImages.length);
  };

  const prevImage = () => {
    if (selectedImage === "/Magna Cum Laude.jpeg" || selectedImage === "/Emergin Leader Award 2024.jpg") return;
    setCurrentImageIndex((prev) => (prev - 1 + deansListImages.length) % deansListImages.length);
  };

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
                Awards & Recognition
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
              Academic achievements, research recognition, and professional honors throughout my career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAwards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Award Icon */}
                <div className="flex items-center space-x-3 mb-4">
                  {getAwardIcon(award.category)}
                  <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    {award.category}
                  </span>
                </div>

                {/* Award Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {award.title}
                </h3>

                {/* Organization */}
                <p className="text-gray-600 mb-4">
                  {award.organization}
                </p>

                {/* Year */}
                <div className="flex items-center space-x-2 text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{award.year}</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4">
                  {award.description}
                </p>

                {/* Magna Cum Laude Image */}
                {award.title === "Magna Cum Laude" && (
                  <div className="mb-4">
                    <div className="relative group">
                      <div
                        className="overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 cursor-pointer"
                        onClick={() => openImageModal("/Magna Cum Laude.jpeg")}
                      >
                        <img
                          src="/Magna Cum Laude.jpeg"
                          alt="Magna Cum Laude - Graduation Cap, Diploma, Medal, and Commemorative Items from American International University-Bangladesh"
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h4 className="font-semibold text-xs">Magna Cum Laude</h4>
                          <p className="text-xs opacity-90">Highest Academic Honors</p>
                        </div>
                        {/* Click indicator */}
                        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to enlarge
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dean's List Honor Images - Auto Slideshow */}
                {award.title === "Dean's List Honor (5 consecutive times)" && (
                  <DeansListSlideshow
                    images={deansListImages}
                    onImageClick={openImageModal}
                  />
                )}

                {/* Emerging Leader Award 2024 Bangladesh Image */}
                {award.title === "Emerging Leader Award 2024 Bangladesh" && (
                  <div className="mb-4">
                    <div className="relative group">
                      <div
                        className="overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 cursor-pointer"
                        onClick={() => openImageModal("/Emergin Leader Award 2024.jpg")}
                      >
                        <img
                          src="/Emergin Leader Award 2024.jpg"
                          alt="Emerging Leader Award 2024 Bangladesh - Based on top-performing academic excellence"
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h4 className="font-semibold text-xs">Emerging Leader Award</h4>
                          <p className="text-xs opacity-90">Top-performing Academic Excellence Recognition</p>
                        </div>
                        {/* Click indicator */}
                        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to enlarge
                        </div>
                      </div>
                    </div>
                  </div>
                )}




              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredAwards.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No awards found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category to view awards.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Awards Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Awards Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognition across academic excellence, research contributions, and competitive achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {awards.filter(a => a.category === 'academic').length}
              </h3>
              <p className="text-gray-600">Academic Awards</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {awards.filter(a => a.category === 'scholarship').length}
              </h3>
              <p className="text-gray-600">Scholarships</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {nonCompetitionAwards.length}
              </h3>
              <p className="text-gray-600">Total Awards</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedImage(null);
            setIsModalOpen(false);
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => {
                setSelectedImage(null);
                setIsModalOpen(false);
              }}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation arrows for Dean's List images only */}
            {selectedImage !== "/Magna Cum Laude.jpeg" && selectedImage !== "/Emergin Leader Award 2024.jpg" && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200 z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200 z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={
                selectedImage === "/Magna Cum Laude.jpeg" || selectedImage === "/Emergin Leader Award 2024.jpg"
                  ? selectedImage
                  : deansListImages[currentImageIndex]
              }
              alt={
                selectedImage === "/Magna Cum Laude.jpeg"
                  ? "Magna Cum Laude - Full Size View"
                  : selectedImage === "/Emergin Leader Award 2024.jpg"
                    ? "Award Certificate - Full Size View"
                    : "Dean's List Honor - Full Size View"
              }
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Image caption */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-3 rounded-lg">
              {selectedImage === "/Magna Cum Laude.jpeg" ? (
                <>
                  <h3 className="font-semibold text-lg">Magna Cum Laude</h3>
                  <p className="text-sm opacity-90">Highest Academic Honors - American International University-Bangladesh</p>
                </>
              ) : selectedImage === "/Emergin Leader Award 2024.jpg" ? (
                <>
                  <h3 className="font-semibold text-lg">Award Certificate</h3>
                  <p className="text-sm opacity-90">Emerging Leader Award & Research Scholarship Recognition</p>
                </>
              ) : (
                <>
                  <h3 className="font-semibold text-lg">Dean&apos;s List Honor</h3>
                  <p className="text-sm opacity-90">
                    {currentImageIndex + 1} of {deansListImages.length} - 5 Consecutive Times Achievement
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
