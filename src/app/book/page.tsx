'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { webname } from '@/contants';

export default function BookPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    referralSource: '',
    referralName: '',
    venuePreference: '',
    estimatedBudget: '',
    guestCount: '',
    additionalInfo: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-stone-h-fit mt-[100px]">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        

        {submitted ? (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2 className="text-2xl font-light text-stone-800 mb-3">Thank You!</h2>
            <p className="text-stone-600 mb-6">Your consultation request has been received. We&apos;re excited to help plan your perfect event and will be in touch within 24 hours.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-stone-200 text-stone-700 px-5 py-2 rounded hover:bg-stone-300 transition"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {/* Contact Information */}
              <div className="col-span-full mb-2">
                <h2 className="text-xl font-light text-stone-800 border-b border-stone-200 pb-2 mb-4">Contact Information</h2>
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm text-stone-600 mb-1">First Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition"
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm text-stone-600 mb-1">Last Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition"
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm text-stone-600 mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition"
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm text-stone-600 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition"
                />
              </div>

              {/* Event Details */}
              <div className="col-span-full mt-4 mb-2">
                <h2 className="text-xl font-light text-stone-800 border-b border-stone-200 pb-2 mb-4">Event Details</h2>
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm text-stone-600 mb-1">Event Type <span className="text-red-500">*</span></label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition"
                >
                  <option value="">Select Event Type</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Wedding">Wedding</option>
                  <option value="NonprofitFundraiser">Nonprofit Fundraiser</option>
                  <option value="NonprofitStewardship">Nonprofit Stewardship/Cultivation</option>
                  <option value="Social">Social</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm text-stone-600 mb-1">Event Date <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition"
                  />
                  <Calendar className="absolute right-3 top-2.5 text-stone-400 pointer-events-none" size={18} />
                </div>
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm text-stone-600 mb-1">Estimated Guest Count <span className="text-red-500">*</span></label>
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition"
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm text-stone-600 mb-1">Budget Range <span className="text-red-500">*</span></label>
                <select
                  name="estimatedBudget"
                  value={formData.estimatedBudget}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition"
                >
                  <option value="">Select Budget Range</option>
                  <option value="Under $5,000">Under $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                </select>
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm text-stone-600 mb-1">Venue Preference</label>
                <input
                  type="text"
                  name="venuePreference"
                  value={formData.venuePreference}
                  onChange={handleChange}
                  placeholder="Hotel, outdoor, restaurant, etc."
                  className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition"
                />
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm text-stone-600 mb-1">How did you hear about us?</label>
                <select
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                  className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition"
                >
                  <option value="">Select Referral Source</option>
                  <option value="Previous Client">Previous Client</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Friend/Family">Friend/Family</option>
                  <option value="Vendor">Vendor</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col-span-full">
                <label className="block text-sm text-stone-600 mb-1">Tell us about your vision</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Share your ideas, theme, special requests or any questions you may have..."
                  className="w-full border border-stone-300 rounded p-2 focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition"
                ></textarea>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={submitting}
                className={`px-8 py-3 rounded transition-all ${
                  submitting 
                    ? 'bg-stone-300 text-stone-500 cursor-not-allowed' 
                    : 'bg-stone-700 text-white hover:bg-stone-800 shadow-md hover:shadow-lg'
                }`}
              >
                {submitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing
                  </span>
                ) : (
                  'Request Consultation'
                )}
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-stone-500">
              <p>By submitting this form, you agree to be contacted by our team regarding your event planning needs.</p>
            </div>
          </form>
        )}

        {/* Contact Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-600">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="font-light text-lg mb-2 text-stone-800">Call Us</h3>
            <p className="text-stone-600">254-728-506-603</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-600">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className="font-light text-lg mb-2 text-stone-800">Email Us</h3>
            <p className="text-stone-600">hello@{webname.trim().split(" ").join("").toLowerCase()}.com</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-600">
                <path d="M12 2 C7.03 2 3 6.03 3 11 C3 16.55 9.4 21.3 11.1 22.54 C11.63 22.96 12.37 22.96 12.9 22.54 C14.6 21.3 21 16.55 21 11 C21 6.03 16.97 2 12 2 Z"></path>
                <circle cx="12" cy="11" r="3"></circle>
              </svg>
            </div>
            <h3 className="font-light text-lg mb-2 text-stone-800">Visit Us</h3>
            <p className="text-stone-600">By appointment only</p>
          </div>
        </div>
      </div>
    </div>
  );
}