// FILE: src/components/Services.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export default function Services() {
  const services: ServiceCategory[] = [
    {
      id: 'planning',
      title: 'Planning',
      description: 'Comprehensive event planning services tailored to your needs',
      items: [
        'Full-Service Event Planning',
        'Day-of Coordination',
        'Partial Planning',
        'Event Timeline Development',
        'Budget Management'
      ]
    },
    {
      id: 'design',
      title: 'Design',
      description: 'Creative design solutions that bring your vision to life',
      items: [
        'Event Design & Styling',
        'Floral Design',
        'Lighting Design',
        'Table Settings & Decor',
        'Theme Development'
      ]
    },
    {
      id: 'production',
      title: 'Production',
      description: 'Seamless production services for flawless execution',
      items: [
        'Vendor Management',
        'On-Site Management',
        'Technical Production',
        'Entertainment Coordination',
        'Staff Training & Management'
      ]
    },
    {
      id: 'fulfillment',
      title: 'Fulfillment',
      description: 'End-to-end fulfillment services for complete peace of mind',
      items: [
        'Post-Event Breakdown',
        'Gift Management',
        'Guest Follow-up',
        'Vendor Payments',
        'Post-Event Analysis'
      ]
    }
  ];

  const [openService, setOpenService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleService = (id: string) => {
    if (openService === id) {
      setOpenService(null);
    } else {
      setOpenService(id);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-cormorant text-center mb-16 relative heading-divider"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          What we bring to the table...
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleService(service.id)}
                className="w-full py-4 px-6 flex justify-between items-center border border-neutral-200 hover:border-neutral-300 rounded bg-white transition-all duration-300"
                aria-expanded={openService === service.id}
                aria-controls={`${service.id}-content`}
              >
                <h3 className="text-xl font-cormorant">{service.title}</h3>
                <motion.div
                  animate={{ rotate: openService === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openService === service.id && (
                  <motion.div
                    id={`${service.id}-content`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 border border-t-0 border-neutral-200 rounded-b bg-white">
                      <p className="text-neutral-700 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.items.map((item, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="flex items-center"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#406848] mr-3"></span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="btn inline-block hover:bg-neutral-100 transition-all duration-300">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}