import SakuraParticles from './components/SakuraParticles';
import ScrollProgress from './components/ScrollProgress';
import PresentationRail from './components/PresentationRail';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudy from './components/CaseStudy';
import BeforeAfterShowcase from './components/BeforeAfterShowcase';
import DealSuite from './components/DealSuite';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-200" style={{ background: '#0d0515' }}>
      <ScrollProgress />
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-kamui-300 focus:px-3 focus:py-2 focus:text-black">
        Skip to content
      </a>
      <SakuraParticles count={22} />
      <PresentationRail />
      <Navbar />
      <main id="content">
        <Hero />
        <Clients />
        <About />
        <Services />
        <Portfolio />
        <CaseStudy />
        <BeforeAfterShowcase />
        <DealSuite />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
