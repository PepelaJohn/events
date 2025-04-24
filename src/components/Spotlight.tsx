// FILE: src/components/Spotlight.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Event = {
  id: number;
  title: string;
  image: string;
  category: string;
  slug: string;
};

export default function Spotlight() {
  const events: Event[] = [
    {
      id: 1,
      title: 'Inclusion Gala',
      image: '/images/wedding.jpeg',
      category: 'Nonprofit',
      slug: 'inclusion-gala'
    },
    {
      id: 2,
      title: 'Tech Conference 2024',
      image: '/images/corporate.jpeg',
      category: 'Corporate',
      slug: 'corporate-events'
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-cormorant text-center mb-16 relative heading-divider"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          In the Spotlight
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="group relative h-80 md:h-96 overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm uppercase tracking-wider mb-2 opacity-90">{event.category}</p>
                  <h3 className="text-2xl font-cormorant mb-4">{event.title}</h3>
                  <Link href={`/gallery/${event.slug}`} className="inline-block py-2 px-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 text-sm hover:bg-white/30 transition-colors rounded-sm">
                    View Gallery
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}