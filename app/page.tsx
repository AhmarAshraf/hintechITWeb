'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import AgileSection from './components/AgileSection';
import GetStarted from './components/GetStarted';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<any>(null);

  useEffect(() => {
    // Register GSAP plugin only on client side
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    // Initialize Locomotive Scroll after a delay to ensure DOM is ready
    const initScroll = () => {
      if (!scrollRef.current || typeof window === 'undefined') return;

      const scrollElement = scrollRef.current;
      if (!scrollElement) return;

      // Dynamically import LocomotiveScroll only on client side
      import('locomotive-scroll').then((LocomotiveScrollModule) => {
        const LocomotiveScroll = LocomotiveScrollModule.default;

        try {
          // Initialize Locomotive Scroll
          locomotiveScrollRef.current = new LocomotiveScroll({
            el: scrollElement,
            smooth: true,
            multiplier: 1,
            class: 'is-revealed',
          });

          // Store instance globally for scroll utility
          (window as any).locomotiveScroll = locomotiveScrollRef.current;

          // Update ScrollTrigger when Locomotive Scroll updates
          locomotiveScrollRef.current.on('scroll', ScrollTrigger.update);

          // Use scrollerProxy for GSAP ScrollTrigger
          ScrollTrigger.scrollerProxy(scrollElement, {
            scrollTop(value) {
              if (arguments.length && locomotiveScrollRef.current) {
                locomotiveScrollRef.current.scrollTo(value, { duration: 0, disableLerp: true });
              }
              return (locomotiveScrollRef.current?.scroll?.instance?.scroll?.y as number) || 0;
            },
            getBoundingClientRect() {
              return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
              };
            },
            pinType: scrollElement.style.transform ? 'transform' : 'fixed',
          });

          // Refresh ScrollTrigger when Locomotive Scroll is ready
          const refreshHandler = () => {
            locomotiveScrollRef.current?.update();
          };

          ScrollTrigger.addEventListener('refresh', refreshHandler);
          ScrollTrigger.refresh();
        } catch (error) {
          console.error('Locomotive Scroll initialization error:', error);
        }
      }).catch((error) => {
        console.error('Failed to load Locomotive Scroll:', error);
      });
    };

    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(initScroll, 100);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      delete (window as any).locomotiveScroll;
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <Services />
        <Portfolio />
        <AgileSection />
        <GetStarted />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
