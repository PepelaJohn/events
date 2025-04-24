// FILE: src/components/Reviews.tsx
'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { webname } from '@/contants';

type Review = {
  id: number;
  quote: string;
  author: string;
  company: string;
  date: string;
  event: string;
};

export default function Reviews() {
  const reviews: Review[] = [
    {
      id: 1,
      quote: "Excellent organization. They handled my community fundraiser with precision and flair. They listened to our needs and were very responsive to our needs. And they are just fun to be near the calendar when family events happen too. I can say 'yup'.",
      author: "Mary Sanders",
      company: "Ragtimes Foundation",
      date: "Aug 10, 2023",
      event: "KC Startup Week: Community Events"
    },
    {
      id: 2,
      quote: "Polly Award Special Event Campaign with Variety KC",
      author: "",
      company: "",
      date: "November 2, 2023",
      event: "Polly Award Special Event Campaign with Variety KC"
    },
    {
      id: 3,
      quote: `I've worked with ${webname.toLocaleUpperCase()} on multiple events. They are the most professional organization in the event planning industry. Great communication with vendors and clients. Highly recommended.`,
      author: "Carlos Woo",
      company: "DesignFlow KC",
      date: "February 27, 2024",
      event: "KC Charity Staff"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const nextReview = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-neutral-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/images/pattern-background.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-cormorant text-center mb-16 relative heading-divider"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Press & Reviews
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-70 md:h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="  p-6 md:p-8 rounded-lg shadow-sm h-fit mb-4 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-neutral-500 mb-2">{reviews[activeIndex].date}</p>
                    <h3 className="text-lg font-medium mb-2">{reviews[activeIndex].event}</h3>
                  </div>
                  
                  <div>
                    <p className="italic text-neutral-700">"{reviews[activeIndex].quote}"</p>
                    {reviews[activeIndex].author && (
                      <p className="mt-4 text-sm font-medium">
                        {reviews[activeIndex].author}
                        {reviews[activeIndex].company && (
                          <span className="text-neutral-500"> - {reviews[activeIndex].company}</span>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
                     onClick={prevReview}
                     className="p-2 rounded-full bg-white border border-neutral-200 hover:border-neutral-300 transition-colors"
                     aria-label="Previous review"
                   >
                     <ChevronLeft size={20} />
                   </button>
                   
                   <div className="flex space-x-2">
                     {reviews.map((_, index) => (
                       <button
                         key={index}
                         onClick={() => setActiveIndex(index)}
                         className={`w-2 h-2 rounded-full transition-colors ${
                           index === activeIndex ? 'bg-[#90c59a]' : 'bg-neutral-300'
                         }`}
                         aria-label={`Go to review ${index + 1}`}
                       />
                     ))}
                   </div>
                   
                   <button
                     onClick={nextReview}
                     className="p-2 rounded-full bg-white border border-neutral-200 hover:border-neutral-300 transition-colors"
                     aria-label="Next review"
                   >
                     <ChevronRight size={20} />
                   </button>
                 </div>
                 
                 <div className="text-center mt-10">
                   <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="btn btn-primary"
                   >
                     View All Reviews
                   </motion.button>
                 </div>
               </div>
             </div>
           </section>
         );
       }
       