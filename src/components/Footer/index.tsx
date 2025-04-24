// FILE: src/components/Footer.tsx
'use client';
import Link from 'next/link';

import { Instagram, Facebook, Linkedin } from 'lucide-react';
import AccurateLogo from '../Logo';
import { webname } from '@/contants';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 pt-16 pb-8 border-t border-neutral-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <AccurateLogo isScrolled></AccurateLogo>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
              <Link
                href="#"
                className="text-sm hover:text-neutral-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm hover:text-neutral-900 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-neutral-900 transition-colors"
              >
                Portfolio
              </Link>
            </nav>

            <div className="flex space-x-4">
              <Link
                target="_blank"
                href="https://instagram.com"
                aria-label="Instagram"
              >
                <Instagram
                  size={18}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                />
              </Link>
              <Link
                target="_blank"
                href="https://facebook.com"
                aria-label="Facebook"
              >
                <Facebook
                  size={18}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                />
              </Link>
              <Link
                target="_blank"
                href="https://linkedin.com"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={18}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-neutral-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} {webname.toLocaleUpperCase()}. All
            rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-xs text-neutral-500 hover:text-neutral-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-neutral-500 hover:text-neutral-700 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}