'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from './ui/SectionTitle';
import ServiceCard from './ui/ServiceCard';

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks and best practices. We create scalable, performant websites and web apps that drive business growth.',
    features: ['React/Next.js', 'Responsive Design', 'SEO Optimized', 'Performance Tuning'],
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile apps for iOS and Android platforms. From concept to app store, we deliver polished mobile experiences.',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'Beautiful and intuitive user interfaces that enhance user experience. We combine aesthetics with functionality to create memorable digital experiences.',
    features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing'],
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and DevOps solutions for your business. We help you leverage cloud technology to scale efficiently.',
    features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Microservices', 'Container Orchestration'],
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description:
      'Intelligent automation and AI-powered features to enhance your products. We integrate cutting-edge AI to solve complex business challenges.',
    features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    description:
      'Enterprise-grade security and compliance solutions for your applications. We ensure your data and systems are protected and compliant.',
    features: ['Penetration Testing', 'GDPR Compliance', 'Security Audits', 'Data Encryption'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Ensure cards are visible
    cardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
      }
    });

    const ctx = gsap.context(() => {
      gsap.from('.section-title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 sm:py-20 md:py-24 lg:py-28 mt-12 sm:mt-16 md:mt-20 bg-gradient-to-br from-gray-50 to-blue-50 w-full"
      data-scroll-section
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <SectionTitle
          title="Our Services"
          subtitle="We offer comprehensive software development services tailored to your business needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch justify-items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="h-full flex w-full max-w-md sm:max-w-none"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

