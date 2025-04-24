
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

// Types
interface GalleryItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
}

// Mock data - in a real app, this would come from an API or CMS
const galleryItems: GalleryItem[] = [
    {
        id: '1',
        slug: 'inclusion-gala',
        title: 'Corporate Events',
        description: 'Professional event planning and execution for businesses and organizations.',
        images: [
        { src: '/images/gallery/1.jpeg', alt: 'Corporate event stage setup with blue lighting' },
        { src: '/images/gallery/2.jpeg', alt: 'Speaker at transparent podium with blue background' },
        { src: '/images/gallery/3.jpeg', alt: 'Audience members smiling during event' },
        { src: '/images/gallery/4.jpeg', alt: 'Vibrant Voices presentation on large screen' },
        { src: '/images/gallery/5.jpeg', alt: 'People networking at corporate event' },
        { src: '/images/gallery/6.jpeg', alt: 'Interactive feedback board with sticky notes' },
        { src: '/images/gallery/7.jpeg', alt: 'Event sponsors display' },
        { src: '/images/gallery/8.jpeg', alt: 'Colorful discussion prompt cards' }
        ]
    },
    {
        id: '2',
        slug: 'corporate-events',
        title: 'Corporate Events',
        description: 'Professional event planning and execution for businesses and organizations.',
        images: [
        { src: '/images/gallery/1.jpeg', alt: 'Corporate event stage setup with blue lighting' },
        { src: '/images/gallery/2.jpeg', alt: 'Speaker at transparent podium with blue background' },
        { src: '/images/gallery/3.jpeg', alt: 'Audience members smiling during event' },
        { src: '/images/gallery/4.jpeg', alt: 'Vibrant Voices presentation on large screen' },
        { src: '/images/gallery/5.jpeg', alt: 'People networking at corporate event' },
        { src: '/images/gallery/6.jpeg', alt: 'Interactive feedback board with sticky notes' },
        { src: '/images/gallery/7.jpeg', alt: 'Event sponsors display' },
        { src: '/images/gallery/8.jpeg', alt: 'Colorful discussion prompt cards' }
        ]
    },
  // Add more gallery items as needed
];

// Function to fetch gallery item data
async function getGalleryItem(slug: string): Promise<GalleryItem | null> {
  // In a real app, this would be an API call
  return galleryItems.find(item => item.slug === slug) || null;
}

interface PageProps {
  params:Promise<{ slug: string }>;
}

export default async function GalleryItemPage({ params }: PageProps) {
  const { slug } = await (params);
  const galleryItem = await getGalleryItem(slug);

  if (!galleryItem) {
    notFound();
  }

  return (
    <div className="container mx-auto mt-[100px] px-4 py-8">
      
        {/* Title and Description */}
        <h1 className='text-3xl font-bold mb-3 '>Gallery</h1>
      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {galleryItem.images.map((image, index) => (
          <div 
            key={index} 
            className={`overflow-hidden ${
              index === 0 || index === 1 ? 'md:col-span-1' : ''
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              priority={index < 2}
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-12 flex justify-between">
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
          Previous Project
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
          Next Project
        </button>
      </div>

      {/* Related Content */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.filter(item => item.id !== galleryItem.id).slice(0, 3).map((item) => (
            <div key={item.id} className="border rounded overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description.substring(0, 80)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mt-16 bg-gray-100 p-8 text-center rounded">
        <h2 className="text-2xl font-bold mb-2">Ready to plan your event?</h2>
        <p className="mb-6 text-gray-600">Let us help you create a memorable experience</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Book a Consultation
        </button>
      </div>
    </div>
  );
}

// Generate static params for all possible slugs
// This is used for static generation at build time
export async function generateStaticParams() {
  // In a real app, fetch all possible slugs from your data source
  return galleryItems.map((item) => ({
    slug: item.slug,
  }));
}