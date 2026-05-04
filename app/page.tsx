import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Manifesto from '@/components/Manifesto';
import Founder from '@/components/Founder';
import Process from '@/components/Process';
import Tracks from '@/components/Tracks';
import AdditionalServices from '@/components/AdditionalServices';
import Differentiators from '@/components/Differentiators';
import Neighborhoods from '@/components/Neighborhoods';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <Marquee />
        <Manifesto />
        <Founder />
        <Process />
        <Tracks />
        <AdditionalServices />
        <Differentiators />
        <Neighborhoods />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
