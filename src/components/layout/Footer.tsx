"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { personalInfo } from '@/lib/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-blue-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div className="space-y-1">
                  <div className="text-sm">
                    <span className="text-gray-400">Malaysia:</span> {personalInfo.phones.malaysia}
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-400">Bangladesh:</span> {personalInfo.phones.bangladesh}
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-blue-400">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                href="/about"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                About Me
              </Link>
              <Link 
                href="/publications"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Publications
              </Link>
              <Link 
                href="/experience"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Experience
              </Link>
              <Link 
                href="/contact"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-blue-400">Connect</h3>
            <div className="space-y-3">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Google Scholar</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Anik Sen. All rights reserved. | 
            <span className="ml-1">
              Graduate Research Assistant at Multimedia University, Malaysia
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
