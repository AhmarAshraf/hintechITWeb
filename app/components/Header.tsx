'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { scrollToSection } from '../utils/scroll';
import Button from './ui/Button';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Simple fade-in animation
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    // Handle scroll effect
    const handleScroll = () => {
      const locomotiveScroll = (window as any).locomotiveScroll;
      let scrollY = 0;

      if (locomotiveScroll && locomotiveScroll.scroll) {
        scrollY = locomotiveScroll.scroll.instance.scroll.y || 0;
      } else {
        scrollY = window.scrollY || document.documentElement.scrollTop;
      }

      setIsScrolled(scrollY > 50);

      // Update active section
      const sections = ['home', 'services', 'portfolio', 'get-started', 'contact'];
      const scrollPosition = scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    const locomotiveScroll = (window as any).locomotiveScroll;
    if (locomotiveScroll) {
      locomotiveScroll.on('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.off('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'get-started', label: 'Get Started' },
    { id: 'contact', label: 'Contact Us', isButton: true },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="header-logo text-xl sm:text-2xl font-bold cursor-pointer flex-shrink-0"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
              HintTech
            </span>
          </button>

          {/* Navigation */}
          <div className="flex items-center gap-4 lg:gap-6">
            {navItems.map((item) =>
              item.isButton ? (
                <Button
                  key={item.id}
                  variant="primary"
                  size="sm"
                  scrollTo={item.id}
                  className="whitespace-nowrap"
                >
                  {item.label}
                </Button>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 font-medium text-sm lg:text-base whitespace-nowrap transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
