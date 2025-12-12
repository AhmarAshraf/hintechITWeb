'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from './ui/Button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Ensure elements are visible immediately
    if (titleRef.current) {
      titleRef.current.style.opacity = '1';
      titleRef.current.style.visibility = 'visible';
    }
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = '1';
      subtitleRef.current.style.visibility = 'visible';
    }
    if (buttonRef.current) {
      buttonRef.current.style.opacity = '1';
      buttonRef.current.style.visibility = 'visible';
    }

    const ctx = gsap.context(() => {
      // Animate title
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      // Animate subtitle
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.2,
          ease: 'power2.out',
        });
      }

      // Animate button
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          scale: 0.95,
          opacity: 0,
          duration: 0.5,
          delay: 0.4,
          ease: 'power2.out',
        });
      }

      // Floating animation for background elements
      gsap.to('.floating-element', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 sm:py-20 md:py-24 lg:py-32 pb-20 sm:pb-24 md:pb-32"
      data-scroll-section
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="floating-element absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="floating-element absolute -bottom-8 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex items-center justify-center min-h-full w-full">
        <div className="text-center max-w-4xl mx-auto w-full px-2">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
          >
            Transform Your Ideas Into
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2"
          >
            We are a cutting-edge software agency specializing in web
            development, mobile apps, and innovative digital solutions that drive
            business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <Button
              ref={buttonRef}
              variant="primary"
              gradient="blue-purple"
              scrollTo="get-started"
              size="lg"
              className="text-base sm:text-lg md:text-xl px-10 sm:px-12 md:px-14 py-5 sm:py-6 md:py-7 font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              scrollTo="portfolio"
              size="lg"
              className="text-base sm:text-lg md:text-xl px-10 sm:px-12 md:px-14 py-5 sm:py-6 md:py-7 font-bold border-2 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

