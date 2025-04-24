// FILE: src/components/Contact.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="relative h-80 md:h-96 lg:h-full"
          >
            <Image
              src="/images/luxury-event.jpeg"
              alt="Champagne toast"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant mb-6">Let&apos;s Toast</h2>
            <p className="text-neutral-700 mb-8">
              Ready to discuss your event? Let&apos;s connect and create something memorable together.
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#406848] focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#406848] focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#406848] focus:border-transparent transition-colors resize-none"
                  required
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-[#406848] text-white rounded-md  transition-colors focus:outline-none focus:ring-2 focus:ring-[#406848] focus:ring-offset-2"
              >
                Send a Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}