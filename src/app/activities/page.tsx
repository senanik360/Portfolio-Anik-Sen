"use client";

import { motion } from 'framer-motion';
import { Users, Calendar, Award, BookOpen, Globe, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { activities } from '@/lib/data/activities';
import { useState, useEffect } from 'react';

// Single Activity Image Component
function SingleActivityImage({ imagePath, onImageClick, title, description }: { imagePath: string, onImageClick: (imagePath: string) => void, title: string, description: string }) {
  return (
    <div className="mb-4">
      <div className="relative group">
        <div
          className="overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 cursor-pointer"
          onClick={() => onImageClick(imagePath)}
        >
          <img
            src={imagePath}
            alt={title}
            className="w-full h-64 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="font-semibold text-sm">{title}</h4>
            <p className="text-xs opacity-90">{description}</p>
          </div>
          {/* Click indicator */}
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to enlarge
          </div>
        </div>
      </div>
    </div>
  );
}

// Activity Slideshow Component for multiple images
function ActivitySlideshow({ images, onImageClick, title, description }: { images: string[], onImageClick: (imagePath: string, index: number) => void, title: string, description: string }) {
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
                  alt={`${title} - Image ${index + 1}`}
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
              <h4 className="font-semibold text-sm">{title}</h4>
              <p className="text-xs opacity-90">{description} - Image {currentSlide + 1} of {images.length}</p>
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

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageSet, setCurrentImageSet] = useState<'citic2025' | 'iaict2025' | 'iciai2025' | 'iceast2025' | 'acie2025' | 'icomeia2024' | 'jointcollaboration' | 'authorworkshop' | 'cnnworkshop' | 'mistleetcon' | 'phplaravel' | 'employabilityskills' | 'englishcommunication' | 'cybersecurity' | 'cisco'>('citic2025');

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Conference images
  const citic2025Images = [
    "/International Conferences/CITIC Cyberjaya.jpeg",
    "/International Conferences/CITIC Cyberjaya 2.jpg"
  ];

  const iaict2025Image = "/International Conferences/IAICT , Bali, Indonesia.jpg";

  const iciai2025Images = [
    "/International Conferences/ICIAI Singapore.jpeg",
    "/International Conferences/ICIAI Singapore 2.jpg"
  ];

  const iceast2025Image = "/International Conferences/ICEAST, Phuket, Thailand.jpg";

  const acie2025Images = [
    "/International Conferences/ACIE, Phuket, Thailand.jpeg",
    "/International Conferences/ACIE, Phuket, Thailand 2.jpg"
  ];

  const icomeia2024Images = [
    "/International Conferences/ICoMeia Langkawi.jpg",
    "/International Conferences/ICoMeia Langkawi 2.jpg"
  ];

  // Workshop and Seminar images
  const jointCollaborationImage = "/Workshop Seminar/𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐉𝐨𝐢𝐧𝐭 𝐂𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐯𝐞 𝐄𝐧𝐠𝐚𝐠𝐞𝐦𝐞𝐧𝐭 𝐒𝐞𝐬𝐬𝐢𝐨𝐧.jpeg";
  const authorWorkshopImage = "/Workshop Seminar/Autor Workshop.jpg";
  const cnnWorkshopImage = "/Workshop Seminar/CNN Industrial Workshop Certificate_Anik Sen.jpg";

  const mistLeetConImages = [
    "/Workshop Seminar/MIST LeetCon.jpg",
    "/Workshop Seminar/MIST LeetCon_2.jpg"
  ];

  const phpLaravelImage = "/Workshop Seminar/Laravel Training Certificate.jpg";
  const employabilitySkillsImage = "/Workshop Seminar/Wadhwani Certificate.png";
  const englishCommunicationImage = "/Workshop Seminar/ECA_WSDA English Communication Certificate_ANIK SEN.jpg";
  const cyberSecurityImage = "/Workshop Seminar/Cyber Security WorkshppCertificate_ANIK SEN.png";
  const ciscoImage = "/Workshop Seminar/Cisco.jpg";

  const openImageModal = (imagePath: string, initialIndex: number = 0, imageSet: 'citic2025' | 'iaict2025' | 'iciai2025' | 'iceast2025' | 'acie2025' | 'icomeia2024' | 'mistleetcon' = 'citic2025') => {
    setSelectedImage(imagePath);
    setCurrentImageIndex(initialIndex);
    setCurrentImageSet(imageSet);
    setIsModalOpen(true);
  };

  const openSingleImageModal = (imagePath: string, imageSet: 'iaict2025' | 'iceast2025' | 'jointcollaboration' | 'authorworkshop' | 'cnnworkshop' | 'phplaravel' | 'employabilityskills' | 'englishcommunication' | 'cybersecurity' | 'cisco' = 'iaict2025') => {
    setSelectedImage(imagePath);
    setCurrentImageIndex(0);
    setCurrentImageSet(imageSet);
    setIsModalOpen(true);
  };

  const getCurrentImages = () => {
    switch (currentImageSet) {
      case 'citic2025':
        return citic2025Images;
      case 'iaict2025':
        return [iaict2025Image];
      case 'iciai2025':
        return iciai2025Images;
      case 'iceast2025':
        return [iceast2025Image];
      case 'acie2025':
        return acie2025Images;
      case 'icomeia2024':
        return icomeia2024Images;
      case 'jointcollaboration':
        return [jointCollaborationImage];
      case 'authorworkshop':
        return [authorWorkshopImage];
      case 'cnnworkshop':
        return [cnnWorkshopImage];
      case 'mistleetcon':
        return mistLeetConImages;
      case 'phplaravel':
        return [phpLaravelImage];
      case 'employabilityskills':
        return [employabilitySkillsImage];
      case 'englishcommunication':
        return [englishCommunicationImage];
      case 'cybersecurity':
        return [cyberSecurityImage];
      case 'cisco':
        return [ciscoImage];
      default:
        return citic2025Images;
    }
  };

  const getCurrentImageSetInfo = () => {
    switch (currentImageSet) {
      case 'citic2025':
        return { title: 'CITIC 2025 Conference', description: 'Computer, Information Technology and Intelligent Computing' };
      case 'iaict2025':
        return { title: 'IAICT 2025 Conference', description: 'IEEE Industry 4.0, AI, and Communications Technology' };
      case 'iciai2025':
        return { title: 'ICIAI 2025 Conference', description: 'Innovation in Artificial Intelligence' };
      case 'iceast2025':
        return { title: 'ICEAST 2025 Conference', description: 'Engineering, Applied Sciences and Technology' };
      case 'acie2025':
        return { title: 'ACIE 2025 Conference', description: 'Asian Conference on Information Engineering' };
      case 'icomeia2024':
        return { title: 'ICoMEIA 2024 Conference', description: 'Mathematics, Engineering & Industrial Applications' };
      case 'jointcollaboration':
        return { title: 'International Joint Collaborative Engagement', description: 'Multi-University Collaboration Session' };
      case 'authorworkshop':
        return { title: 'Author Workshop', description: 'Write like a scholar, think like a reviewer' };
      case 'cnnworkshop':
        return { title: 'CNN Architectures Workshop', description: 'Industrial Applications Training' };
      case 'mistleetcon':
        return { title: 'MIST LeetCon 2023', description: 'HackMeIfYouCan Cyber Security Workshop' };
      case 'phplaravel':
        return { title: 'PHP with Laravel Training', description: 'Web Development Training Program' };
      case 'employabilityskills':
        return { title: 'Employability Skills Program', description: '21st Century Advanced Skills Training' };
      case 'englishcommunication':
        return { title: 'English Communication Training', description: 'Professional Communication Skills' };
      case 'cybersecurity':
        return { title: 'Cyber Security Awareness', description: 'Modern Day Security Deep Dive' };
      case 'cisco':
        return { title: 'Cisco IT Essentials', description: 'IT Fundamentals Certification' };
      default:
        return { title: 'Activity', description: 'Professional Activity' };
    }
  };

  const nextImage = () => {
    const currentImages = getCurrentImages();
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    const currentImages = getCurrentImages();
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

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

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'conference':
        return <Globe className="w-6 h-6 text-blue-600" />;
      case 'workshop':
        return <BookOpen className="w-6 h-6 text-green-600" />;
      case 'training':
        return <Users className="w-6 h-6 text-purple-600" />;
      case 'volunteer':
        return <Users className="w-6 h-6 text-purple-600" />;
      case 'leadership':
        return <Award className="w-6 h-6 text-yellow-600" />;
      case 'competition':
        return <Award className="w-6 h-6 text-orange-600" />;
      default:
        return <Globe className="w-6 h-6 text-blue-600" />;
    }
  };

  const filteredActivities = selectedCategory === 'all'
    ? activities
    : activities.filter(activity => activity.type === selectedCategory);

  const categories = [
    { id: 'all', name: 'All Activities', count: activities.length },
    { id: 'conference', name: 'Conferences', count: activities.filter(a => a.type === 'conference').length },
    { id: 'workshop', name: 'Workshops', count: activities.filter(a => a.type === 'workshop').length },
    { id: 'training', name: 'Training', count: activities.filter(a => a.type === 'training').length },
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
                Professional Activities
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
              International conferences, workshops, training programs, and professional development activities.
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

      {/* Activities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Activity Icon */}
                <div className="flex items-center space-x-3 mb-4">
                  {getActivityIcon(activity.type)}
                  <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    {activity.type}
                  </span>
                </div>

                {/* Activity Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {activity.title}
                </h3>

                {/* Organization */}
                <p className="text-gray-600 mb-4">
                  {activity.organization}
                </p>

                {/* Year */}
                <div className="flex items-center space-x-2 text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{activity.year}</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4">
                  {activity.description}
                </p>

                {/* CITIC 2025 Images - Slideshow */}
                {activity.title === "The 5th International Conference on Computer, Information Technology and Intelligent Computing (CITIC 2025)" && (
                  <ActivitySlideshow
                    images={citic2025Images}
                    onImageClick={(imagePath, index) => openImageModal(imagePath, index, 'citic2025')}
                    title="CITIC 2025 Conference"
                    description="Computer, Information Technology and Intelligent Computing"
                  />
                )}

                {/* IAICT 2025 Single Image */}
                {activity.title === "The 2025 IEEE International Conference on Industry 4.0, Artificial Intelligence, and Communications Technology (IAICT'2025)" && (
                  <SingleActivityImage
                    imagePath={iaict2025Image}
                    onImageClick={(imagePath) => openSingleImageModal(imagePath, 'iaict2025')}
                    title="IAICT 2025 Conference"
                    description="IEEE Industry 4.0, AI, and Communications Technology"
                  />
                )}

                {/* ICIAI 2025 Images - Slideshow */}
                {activity.title === "The 9th International Conference on Innovation in Artificial Intelligence (ICIAI 2025)" && (
                  <ActivitySlideshow
                    images={iciai2025Images}
                    onImageClick={(imagePath, index) => openImageModal(imagePath, index, 'iciai2025')}
                    title="ICIAI 2025 Conference"
                    description="Innovation in Artificial Intelligence"
                  />
                )}

                {/* ICEAST 2025 Single Image */}
                {activity.title === "The 11th International Conference on Engineering, Applied Sciences and Technology (ICEAST 2025)" && (
                  <SingleActivityImage
                    imagePath={iceast2025Image}
                    onImageClick={(imagePath) => openSingleImageModal(imagePath, 'iceast2025')}
                    title="ICEAST 2025 Conference"
                    description="Engineering, Applied Sciences and Technology"
                  />
                )}

                {/* ACIE 2025 Images - Slideshow */}
                {activity.title === "The 5th Asian Conference on Information Engineering (ACIE 2025)" && (
                  <ActivitySlideshow
                    images={acie2025Images}
                    onImageClick={(imagePath, index) => openImageModal(imagePath, index, 'acie2025')}
                    title="ACIE 2025 Conference"
                    description="Asian Conference on Information Engineering"
                  />
                )}

                {/* ICoMEIA 2024 Images - Slideshow */}
                {activity.title === "5th International Conference on Mathematics, Engineering & Industrial Applications (ICoMEIA)" && (
                  <ActivitySlideshow
                    images={icomeia2024Images}
                    onImageClick={(imagePath, index) => openImageModal(imagePath, index, 'icomeia2024')}
                    title="ICoMEIA 2024 Conference"
                    description="Mathematics, Engineering & Industrial Applications"
                  />
                )}

                {/* International Joint Collaborative Engagement Session Single Image */}
                {activity.title === "International Joint Collaborative Engagement Session" && (
                  <SingleActivityImage
                    imagePath={jointCollaborationImage}
                    onImageClick={(imagePath) => openSingleImageModal(imagePath, 'jointcollaboration')}
                    title="International Joint Collaborative Engagement"
                    description="Multi-University Collaboration Session"
                  />
                )}

                {/* Author Workshop Single Image */}
                {activity.title === "Author Workshop - Write like a scholar, think like a reviewer" && (
                  <SingleActivityImage
                    imagePath={authorWorkshopImage}
                    onImageClick={(imagePath) => openSingleImageModal(imagePath, 'authorworkshop')}
                    title="Author Workshop"
                    description="Write like a scholar, think like a reviewer"
                  />
                )}

                {/* CNN Architectures Workshop Single Image */}
                {activity.title === "CNN Architectures in Industrial Applications" && (
                  <SingleActivityImage
                    imagePath={cnnWorkshopImage}
                    onImageClick={(imagePath) => openSingleImageModal(imagePath, 'cnnworkshop')}
                    title="CNN Architectures Workshop"
                    description="Industrial Applications Training"
                  />
                )}

                {/* MIST LeetCon 2023 Images - Slideshow */}
                {activity.title === "MIST LeetCon 2023 - HackMeIfYouCan" && (
                  <ActivitySlideshow
                    images={mistLeetConImages}
                    onImageClick={(imagePath, index) => openImageModal(imagePath, index, 'mistleetcon')}
                    title="MIST LeetCon 2023"
                    description="HackMeIfYouCan Cyber Security Workshop"
                  />
                )}

                {/* PHP with Laravel Single Image */}
                {activity.title === "PHP with Laravel" && (
                  <SingleActivityImage
                    imagePath={phpLaravelImage}
                    onImageClick={(imagePath) => openSingleImageModal(imagePath, 'phplaravel')}
                    title="PHP with Laravel Training"
                    description="Web Development Training Program"
                  />
                )}

                {/* 21st Century Employability Skilling Program Single Image */}
                {activity.title === "21st Century Employability Skilling Program - Advanced" && (
                  <SingleActivityImage
                    imagePath={employabilitySkillsImage}
                    onImageClick={(imagePath) => openSingleImageModal(imagePath, 'employabilityskills')}
                    title="Employability Skills Program"
                    description="21st Century Advanced Skills Training"
                  />
                )}

                {/* Professional English Communication Training Single Image */}
                {activity.title === "Professional English Communication and Training" && (
                  <SingleActivityImage
                    imagePath={englishCommunicationImage}
                    onImageClick={(imagePath) => openSingleImageModal(imagePath, 'englishcommunication')}
                    title="English Communication Training"
                    description="Professional Communication Skills"
                  />
                )}

                {/* Cyber Security & Social Awareness Program Single Image */}
                {activity.title === "Cyber Security & Social Awareness Program - 2022: A Deep Dive into the Modern Day Security" && (
                  <SingleActivityImage
                    imagePath={cyberSecurityImage}
                    onImageClick={(imagePath) => openSingleImageModal(imagePath, 'cybersecurity')}
                    title="Cyber Security Awareness"
                    description="Modern Day Security Deep Dive"
                  />
                )}

                {/* Cisco IT Essentials Single Image */}
                {activity.title === "Cisco IT Essentials" && (
                  <SingleActivityImage
                    imagePath={ciscoImage}
                    onImageClick={(imagePath) => openSingleImageModal(imagePath, 'cisco')}
                    title="Cisco IT Essentials"
                    description="IT Fundamentals Certification"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredActivities.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No activities found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category to view activities.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Activities Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Activities Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional development through international conferences, workshops, training programs, and collaborative engagements
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
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {activities.filter(a => a.type === 'conference').length}
              </h3>
              <p className="text-gray-600">Conferences</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {activities.filter(a => a.type === 'workshop').length}
              </h3>
              <p className="text-gray-600">Workshops</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {activities.filter(a => a.type === 'training').length}
              </h3>
              <p className="text-gray-600">Training Programs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {activities.filter(a => a.description.includes('certificate')).length}
              </h3>
              <p className="text-gray-600">With Certificates</p>
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

            {/* Navigation arrows (only show for multi-image sets) */}
            {getCurrentImages().length > 1 && (
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
              src={getCurrentImages()[currentImageIndex]}
              alt={`${getCurrentImageSetInfo().title} - Full Size View`}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />

            {/* Image caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 rounded-b-lg">
              <h3 className="text-lg font-semibold mb-1">{getCurrentImageSetInfo().title}</h3>
              <p className="text-sm opacity-90">{getCurrentImageSetInfo().description}</p>
              {getCurrentImages().length > 1 && (
                <p className="text-xs opacity-75 mt-1">
                  Image {currentImageIndex + 1} of {getCurrentImages().length}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
