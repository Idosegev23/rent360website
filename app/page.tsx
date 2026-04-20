import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Manifesto from '@/components/Manifesto';
import Founder from '@/components/Founder';
import Process from '@/components/Process';
import Tracks from '@/components/Tracks';
import Differentiators from '@/components/Differentiators';
import Neighborhoods from '@/components/Neighborhoods';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <Manifesto />
      <Founder />
      <Process />
      <Tracks />
      <Differentiators />
      <Neighborhoods />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
