// FILE: src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { webname } from '@/contants';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: `${webname} | Luxury Event Planning`,
  description: 'Best event planning company serving Nairobi City and beyond. Specializing in curated experiences for weddings, corporate events, and celebrations.',
  keywords: 'event planning, Nairobi City events, wedding planner, corporate events, luxury events',
  openGraph: {
    title: `${webname} | Luxury Event Planning`,
    description: 'Best event planning company serving Nairobi City and beyond.',
    url: 'https://events-team.netlify.app/', // Replace with your actual URL
    siteName: webname || 'Luxury Event Planniing',
    images: [
      {
        url: 'https://events-team.netlify.app/preview.png', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Luxury Event Planning',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: `${webname} | Luxury Event Planning`,
    description: 'Best event planning company serving Nairobi City and beyond.',
    images: ['https://events-team.netlify.app/preview.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="flex flex-col min-h-screen bg-neutral-50">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}