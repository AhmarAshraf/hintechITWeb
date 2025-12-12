'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './ui/Button';

export default function GetStarted() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Ensure content is visible
    if (contentRef.current) {
      Array.from(contentRef.current.children).forEach((child: any) => {
        if (child) {
          child.style.opacity = '1';
          child.style.visibility = 'visible';
        }
      });
    }
    if (buttonRef.current) {
      buttonRef.current.style.opacity = '1';
      buttonRef.current.style.visibility = 'visible';
    }

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });

      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          scale: 0.95,
          opacity: 0,
          duration: 0.5,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="get-started"
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden w-full"
      data-scroll-section
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-10">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 text-blue-100 leading-relaxed px-2">
            Let's discuss how we can help transform your ideas into reality.
            Get in touch with us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center">
            <Button
              ref={buttonRef}
              variant="secondary"
              scrollTo="contact"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50 text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 font-bold shadow-lg hover:shadow-xl"
            >
              Contact Us Now
            </Button>
            <Button
              variant="outline"
              scrollTo="portfolio"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 font-bold shadow-md hover:shadow-lg"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

