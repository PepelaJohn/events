
import Hero from '@/components/Hero';
import CuratedExperiences from '@/components/CuratedExperiences';
import Services from '@/components/Services';
import Spotlight from '@/components/Spotlight';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <CuratedExperiences />
      <Services />
      <Spotlight />
      <Reviews />
      <Contact />
    </>
  );
}