import { webname } from '@/contants';
import Image from 'next/image';
import Link from 'next/link';

import { Briefcase, Heart, Users, GlassWater, Sparkles, Award } from 'lucide-react';
export default function ServicesPage() {
  return (
    <div className="bg-white h-fit ">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto border overflow-hidden p-3 border-gray-800">
          <Image
            src="/images/hero.jpeg"
            alt="Event planning consultation"
            width={1200}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-light uppercase tracking-wide text-stone-800 mb-6">What We Do</h1>
        <p className="max-w-3xl mx-auto text-stone-700 mb-12">
          At {webname}, we pride ourselves in being an extension of your organization. Our team of experts service a 
          wide variety of events. Let us help you plan, design, and produce your next gathering.
        </p>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-light text-stone-800 mb-8">
            Our Cream & Sugar
            <br />(Event Specialties)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="group">
              <div className="overflow-hidden mb-2">
                <Image
                  src="/images/gallery/1.jpeg"
                  alt="Fundraising event"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="uppercase text-stone-800 tracking-wide">Fundraisers</h3>
            </div>

            <div className="group">
              <div className="overflow-hidden mb-2">
                <Image
                   src="/images/gallery/2.jpeg"
                  alt="Conference event"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="uppercase text-stone-800 tracking-wide">Conferences</h3>
            </div>

            <div className="group">
              <div className="overflow-hidden mb-2">
                <Image
                   src="/images/gallery/3.jpeg"
                  alt="Annual celebration"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="uppercase text-stone-800 tracking-wide">Annual Celebrations</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Services Section */}
      <section className="bg-stone-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="transform -rotate-6">
                <h2 className="text-2xl font-light tracking-wide text-stone-700">
                  <span className="block">Highlighted</span>
                  <span className="block">Services</span>
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-stone-700">
              <div className="flex items-start">
                <span className="mr-2 text-stone-400">•</span>
                <p>RFP Creation & Management</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-stone-400">•</span>
                <p>Speaker & Stage Management</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-stone-400">•</span>
                <p>Scripting</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-stone-400">•</span>
                <p>Event Design</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-stone-400">•</span>
                <p>Branding & Marketing Cultivation</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-stone-400">•</span>
                <p>Sponsor Cultivation, Management, & Fulfillment</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-stone-400">•</span>
                <p>Travel & Hotel Facilitation</p>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-stone-400">•</span>
                <p>& so much more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-light text-center text-stone-800 mb-16">Our Process</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <h3 className="mb-2 text-stone-800">
              <span className="block font-light">Step 1:</span>
              <span className="uppercase tracking-wider text-lg">Introduction</span>
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              During our first consultation, we will learn about your organization, event goals, values, and trajectory. This is where we determine if we are the perfect fit.
            </p>
          </div>

          <div className="text-center">
            <h3 className="mb-2 text-stone-800">
              <span className="block font-light">Step 2:</span>
              <span className="uppercase tracking-wider text-lg">Customization</span>
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              Following our conversation, we will work on personalizing the perfect package for what your event needs. All clients start with our base services.
            </p>
          </div>

          <div className="text-center">
            <h3 className="mb-2 text-stone-800">
              <span className="block font-light">Step 3:</span>
              <span className="uppercase tracking-wider text-lg">Activation</span>
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              Once the contract is signed, we launch into action! Breathe a sigh of relief - we are now in this together!
            </p>
          </div>
        </div>
      </section>

     {/* Service Categories */}
<section className="bg-stone-50 py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-light text-center text-stone-800 mb-12">Event Categories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Corporate Events", icon: "Briefcase" },
          { title: "Nonprofit Galas", icon: "Heart" },
          { title: "Conferences", icon: "Users" },
          { title: "Social Gatherings", icon: "GlassWater" },
          { title: "Experiential Events", icon: "Sparkles" },
          { title: "Award Ceremonies", icon: "Award" }
        ].map((category, index) => (
          <div key={index} className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow border border-stone-100">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                  {category.icon === "Briefcase" && <Briefcase size={24} className="text-stone-600" />}
                  {category.icon === "Heart" && <Heart size={24} className="text-stone-600" />}
                  {category.icon === "Users" && <Users size={24} className="text-stone-600" />}
                  {category.icon === "GlassWater" && <GlassWater size={24} className="text-stone-600" />}
                  {category.icon === "Sparkles" && <Sparkles size={24} className="text-stone-600" />}
                  {category.icon === "Award" && <Award size={24} className="text-stone-600" />}
                </div>
              </div>
              <h3 className="text-lg text-stone-800">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-light text-stone-800 mb-4">
          Start Transforming Your<br />Vision into Reality
        </h2>
        <p className="max-w-2xl mx-auto text-stone-700 mb-8">
          From concept to creation, our seasoned event planning team is ready to help you take the 
          first step towards planning an unforgettable experience. Let us discuss your goals, make 
          every detail count, & execute the perfect event that wows your guests.
        </p>
        <Link href="/book" className="inline-block bg-stone-200 hover:bg-stone-300 text-stone-700 px-6 py-3 transition-colors">
          Book a Consultation
        </Link>
      </section>

      {/* Custom Packages Section */}
      <section className="bg-stone-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-light text-center text-stone-800 mb-12">Tailored Packages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-stone-100 text-center">
                <h3 className="text-xl text-stone-800 mb-4">Essential Support</h3>
                <p className="text-stone-600 mb-6 text-sm">Perfect for organizations with existing event staff who need specialized assistance.</p>
                <ul className="text-sm text-stone-700 space-y-2 mb-8">
                  <li>Initial consultation</li>
                  <li>Event strategy planning</li>
                  <li>Vendor recommendations</li>
                  <li>Timeline development</li>
                </ul>
                <Link href="/book" className="inline-block text-stone-700 border-b border-stone-400 hover:border-stone-600 transition-colors">
                  Learn More
                </Link>
              </div>
              
              <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-stone-100 text-center relative">
                <div className="absolute top-0 right-0 bg-stone-700 text-white px-3 py-1 text-xs">
                  POPULAR
                </div>
                <h3 className="text-xl text-stone-800 mb-4">Full Management</h3>
                <p className="text-stone-600 mb-6 text-sm">Comprehensive planning and execution for your entire event.</p>
                <ul className="text-sm text-stone-700 space-y-2 mb-8">
                  <li>All Essential Support features</li>
                  <li>Full vendor management</li>
                  <li>On-site coordination</li>
                  <li>Budget management</li>
                  <li>Post-event evaluation</li>
                </ul>
                <Link href="/book" className="inline-block text-stone-700 border-b border-stone-400 hover:border-stone-600 transition-colors">
                  Learn More
                </Link>
              </div>
              
              <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-stone-100 text-center">
                <h3 className="text-xl text-stone-800 mb-4">Premium Experience</h3>
                <p className="text-stone-600 mb-6 text-sm">White-glove service for high-profile or complex events.</p>
                <ul className="text-sm text-stone-700 space-y-2 mb-8">
                  <li>All Full Management features</li>
                  <li>Custom design elements</li>
                  <li>VIP guest management</li>
                  <li>Media coordination</li>
                  <li>Extended support team</li>
                </ul>
                <Link href="/book" className="inline-block text-stone-700 border-b border-stone-400 hover:border-stone-600 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}