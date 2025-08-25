"use client";

import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { awards } from '@/lib/data/awards';
import { useState, useEffect } from 'react';

// Single Achievement Image Component
function SingleAchievementImage({ imagePath, onImageClick, title, description }: { imagePath: string, onImageClick: (imagePath: string) => void, title: string, description: string }) {
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

// Generic Achievement Slideshow Component
function AchievementSlideshow({ images, onImageClick, title, description }: { images: string[], onImageClick: (imagePath: string, index: number) => void, title: string, description: string }) {
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

export default function AchievementsPage() {
    const [isClient, setIsClient] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageSet, setCurrentImageSet] = useState<'inventx2024' | 'inventx2025' | 'duet2023' | 'infineon2025' | 'orbitax2023' | 'threemt2025' | 'cuet2023'>('inventx2024');

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Filter only competition awards
    const competitionAwards = awards.filter(award => award.category === 'competition');

    // iNVENTX 2024 images
    const inventx2024Images = [
        "/iNVENTX 2024/iNVENTX GOLD AWARD CERTIFICATE - ANIK SEN.jpg",
        "/iNVENTX 2024/iNVENTX Gold Award.jpg",
        "/iNVENTX 2024/Lab Mates.jpg"
    ];

    // iNVENTX 2025 images
    const inventx2025Images = [
        "/iNVENTX 2025/Gold iNVENTX 25 C1.jpg",
        "/iNVENTX 2025/Gold iNVENTX 25 C2.jpg",
        "/iNVENTX 2025/WhatsApp Image 2025-08-24 at 2.39.08 PM.jpeg",
        "/iNVENTX 2025/WhatsApp Image 2025-08-24 at 2.39.54 PM (1).jpeg",
        "/iNVENTX 2025/WhatsApp Image 2025-08-24 at 2.39.54 PM.jpeg",
        "/iNVENTX 2025/WhatsApp Image 2025-08-24 at 2.39.55 PM.jpeg",
        "/iNVENTX 2025/WhatsApp Image 2025-08-24 at 2.49.06 PM (1).jpeg",
        "/iNVENTX 2025/WhatsApp Image 2025-08-24 at 2.49.06 PM.jpeg"
    ];

    // DUET TechFest 2023 images
    const duet2023Images = [
        "/Duet Tech Fest/Duet Techfest.jpg",
        "/Duet Tech Fest/Duet Techfest_2.jpg",
        "/Duet Tech Fest/Duet Techfest_3.jpg"
    ];

    // Infineon-MMU 2025 image
    const infineon2025Image = "/1st Runner-Up in Infineon-MMU Innovative Research Poster Competition 2025 (IT-Category).png";

    // Orbitax SUST SWE Technovent 2023 image
    const orbitax2023Image = "/Orbitax SUST SWE Technovent 2023 (Brain Station 23 Hackathon).jpg";

    // 3MT Competition 2025 image
    const threeMT2025Image = "/3MT Certificate _ ANIK SEN.jpg";

    // National Research Fair CUET 2023 image
    const cuetResearchFair2023Image = "/National Research Fair CUET.jpg";

    const openImageModal = (imagePath: string, initialIndex: number = 0, imageSet: 'inventx2024' | 'inventx2025' | 'duet2023' | 'infineon2025' | 'orbitax2023' | 'threemt2025' | 'cuet2023' = 'inventx2024') => {
        setSelectedImage(imagePath);
        setCurrentImageIndex(initialIndex);
        setCurrentImageSet(imageSet);
        setIsModalOpen(true);
    };

    const openSingleImageModal = (imagePath: string, imageSet: 'infineon2025' | 'orbitax2023' | 'threemt2025' | 'cuet2023' = 'infineon2025') => {
        setSelectedImage(imagePath);
        setCurrentImageIndex(0);
        setCurrentImageSet(imageSet);
        setIsModalOpen(true);
    };

    const getCurrentImages = () => {
        switch (currentImageSet) {
            case 'inventx2024':
                return inventx2024Images;
            case 'inventx2025':
                return inventx2025Images;
            case 'duet2023':
                return duet2023Images;
            case 'infineon2025':
                return [infineon2025Image];
            case 'orbitax2023':
                return [orbitax2023Image];
            case 'threemt2025':
                return [threeMT2025Image];
            case 'cuet2023':
                return [cuetResearchFair2023Image];
            default:
                return inventx2024Images;
        }
    };

    const getCurrentImageSetInfo = () => {
        switch (currentImageSet) {
            case 'inventx2024':
                return { title: 'iNVENTX 2024 Gold Award', description: 'International Innovation Exhibition Achievement' };
            case 'inventx2025':
                return { title: 'iNVENTX 2025 Gold Award (Two Awards)', description: 'International Innovation Exhibition Achievement' };
            case 'duet2023':
                return { title: 'DUET TechFest 2k23 Winner', description: 'Idea & Project Exhibition Achievement' };
            case 'infineon2025':
                return { title: 'Infineon-MMU 1st Runner-Up', description: 'Innovative Research Poster Competition Achievement' };
            case 'orbitax2023':
                return { title: 'Orbitax SUST SWE Technovent 2023', description: 'Brain Station 23 Hackathon Achievement' };
            case 'threemt2025':
                return { title: '3-Minute Thesis Finalist 2025', description: 'Research Presentation Competition Achievement' };
            case 'cuet2023':
                return { title: 'National Research Fair 2023 CUET', description: 'Research Presentation Achievement' };
            default:
                return { title: 'Achievement', description: 'Competition Achievement' };
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
                                Competitive Achievements
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
                            Competition wins, innovation exhibitions, and competitive recognitions showcasing excellence in research and development.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Achievements Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {competitionAwards.map((achievement, index) => (
                            <motion.div
                                key={achievement.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Achievement Icon */}
                                <div className="flex items-center space-x-3 mb-4">
                                    <Medal className="w-6 h-6 text-green-600" />
                                    <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                                        Competition
                                    </span>
                                </div>

                                {/* Achievement Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {achievement.title}
                                </h3>

                                {/* Organization */}
                                <p className="text-gray-600 mb-4">
                                    {achievement.organization}
                                </p>

                                {/* Year */}
                                <div className="flex items-center space-x-2 text-gray-500 mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm">{achievement.year}</span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 mb-4">
                                    {achievement.description}
                                </p>

                                {/* iNVENTX 2024 Images - Auto Slideshow */}
                                {achievement.title === "Gold Award - iNVENTX International Innovation Exhibition 2024" && (
                                    <AchievementSlideshow
                                        images={inventx2024Images}
                                        onImageClick={(imagePath, index) => openImageModal(imagePath, index, 'inventx2024')}
                                        title="iNVENTX 2024 Gold Award"
                                        description="Innovation Exhibition Achievement"
                                    />
                                )}

                                {/* iNVENTX 2025 Images - Auto Slideshow */}
                                {achievement.title === "Gold Award (two) - iNVENTX International Innovation Exhibition 2025" && (
                                    <AchievementSlideshow
                                        images={inventx2025Images}
                                        onImageClick={(imagePath, index) => openImageModal(imagePath, index, 'inventx2025')}
                                        title="iNVENTX 2025 Gold Award"
                                        description="Innovation Exhibition Achievement"
                                    />
                                )}

                                {/* DUET TechFest 2023 Images - Auto Slideshow */}
                                {achievement.title === "DUET TechFest 2k23 - Winner" && (
                                    <AchievementSlideshow
                                        images={duet2023Images}
                                        onImageClick={(imagePath, index) => openImageModal(imagePath, index, 'duet2023')}
                                        title="DUET TechFest 2k23 Winner"
                                        description="Idea & Project Exhibition Achievement"
                                    />
                                )}

                                {/* Infineon-MMU 2025 Single Image */}
                                {achievement.title === "1st Runner-Up in Infineon-MMU Innovative Research Poster Competition 2025 (IT-Category)" && (
                                    <SingleAchievementImage
                                        imagePath={infineon2025Image}
                                        onImageClick={(imagePath) => openSingleImageModal(imagePath, 'infineon2025')}
                                        title="Infineon-MMU 1st Runner-Up"
                                        description="Innovative Research Poster Competition Achievement"
                                    />
                                )}

                                {/* Orbitax SUST SWE Technovent 2023 Single Image */}
                                {achievement.title === "Orbitax SUST SWE Technovent 2023 (Brain Station 23 Hackathon)" && (
                                    <SingleAchievementImage
                                        imagePath={orbitax2023Image}
                                        onImageClick={(imagePath) => openSingleImageModal(imagePath, 'orbitax2023')}
                                        title="Orbitax SUST SWE Technovent 2023"
                                        description="Brain Station 23 Hackathon Achievement"
                                    />
                                )}

                                {/* 3-Minute Thesis Competition 2025 Single Image */}
                                {achievement.title === "Finalist - 3-Minute Thesis (3MT) Competition 2025 (Master Level - MMU)" && (
                                    <SingleAchievementImage
                                        imagePath={threeMT2025Image}
                                        onImageClick={(imagePath) => openSingleImageModal(imagePath, 'threemt2025')}
                                        title="3-Minute Thesis Finalist 2025"
                                        description="Research Presentation Competition Achievement"
                                    />
                                )}

                                {/* National Research Fair CUET 2023 Single Image */}
                                {achievement.title === "National Research Fair-2023, CUET, Bangladesh" && (
                                    <SingleAchievementImage
                                        imagePath={cuetResearchFair2023Image}
                                        onImageClick={(imagePath) => openSingleImageModal(imagePath, 'cuet2023')}
                                        title="National Research Fair 2023 CUET"
                                        description="Research Presentation Achievement"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* No Results */}
                    {competitionAwards.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-center py-12"
                        >
                            <Medal className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                No competitive achievements found
                            </h3>
                            <p className="text-gray-500">
                                Check back later for updates on competitive achievements.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Achievements Summary */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Achievement Overview
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Recognition through competitive excellence in innovation, research presentations, and technical competitions
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
                                {competitionAwards.filter(a => a.title.includes('Gold')).length}
                            </h3>
                            <p className="text-gray-600">Gold Awards</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Medal className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {competitionAwards.length}
                            </h3>
                            <p className="text-gray-600">Total Competitions</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {competitionAwards.filter(a => a.title.includes('Finalist')).length}
                            </h3>
                            <p className="text-gray-600">Finalist Positions</p>
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
                        <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-3 rounded-lg">
                            <h3 className="font-semibold text-lg">{getCurrentImageSetInfo().title}</h3>
                            <p className="text-sm opacity-90">
                                {currentImageIndex + 1} of {getCurrentImages().length} - {getCurrentImageSetInfo().description}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}