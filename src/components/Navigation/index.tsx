// FILE: src/components/Navigation.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import FlexibleLogo from '../Logo';
import { year } from '@/contants';
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white md:py-8 py-5'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="font-montserrat text-sm tracking-wider  hover:text-neutral-600 transition-colors">
            About
          </Link>
          <Link href="/services" className="font-montserrat text-sm tracking-wider hover:text-neutral-600 transition-colors">
            Services
          </Link>
          <Link href="#" className="font-montserrat text-sm tracking-wider hover:text-neutral-600 transition-colors">
            Portfolio
          </Link>
        </nav>
        
        <Link href="/" className="mx-auto md:mx-0">
         <FlexibleLogo  isScrolled={isScrolled}  yearText={year}></FlexibleLogo>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link  target='_blank' href="https://instagram.com" aria-label="Instagram" className="text-neutral-600 hover:text-neutral-900">
            <Instagram size={18} />
          </Link>
          <Link target='_blank' href="https://facebook.com" aria-label="Facebook" className="text-neutral-600 hover:text-neutral-900">
            <Facebook size={18} />
          </Link>
          <Link target='_blank' href="https://linkedin.com" aria-label="LinkedIn" className="text-neutral-600 hover:text-neutral-900">
            <Linkedin size={18} />
          </Link>
          <Link href="/book" className="text-sm font-medium hover:text-neutral-600 transition-colors">
            Contact Us
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-neutral-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col p-4">
              <Link 
                href="#" 
                className="py-3 px-4 hover:bg-neutral-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="py-3 px-4 hover:bg-neutral-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#" 
                className="py-3 px-4 hover:bg-neutral-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/book" 
                className="py-3 px-4 hover:bg-neutral-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="flex space-x-4 p-4">
                <Link href="https://instagram.com" aria-label="Instagram" className="text-neutral-600 hover:text-neutral-900">
                  <Instagram size={18} />
                </Link>
                <Link href="https://facebook.com" aria-label="Facebook" className="text-neutral-600 hover:text-neutral-900">
                  <Facebook size={18} />
                </Link>
                <Link href="https://linkedin.com" aria-label="LinkedIn" className="text-neutral-600 hover:text-neutral-900">
                  <Linkedin size={18} />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}