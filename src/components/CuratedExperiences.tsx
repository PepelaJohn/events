// FILE: src/components/CuratedExperiences.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { webname } from '@/contants';

export default function CuratedExperiences() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section ref={sectionRef} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-8 text-center lg:text-left">
              Curated Event Experiences
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              {webname.toLocaleUpperCase()} is a boutique full-service, {webname.toLocaleUpperCase()} is a boutique event planning and design company that specializes in curated, heartfelt, breathtaking weddings, and private celebrations.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-8">
              We are inspired by our clients' mission, values, and goals to create memorable experiences for their guests. We believe in the power of creating intentional, well-planned celebrations that not only share your voice and build your brand but are enjoyable for everyone involved.
            </p>
            <div className="text-center lg:text-left">
              <Link href="#" className="btn inline-block transition-all duration-300 hover:bg-neutral-100">
                About Us
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <Image
              src="/images/wedding.jpeg"
              alt="Elegant dessert display"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}