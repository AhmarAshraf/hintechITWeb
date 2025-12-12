'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from './ui/SectionTitle';
import ProjectCard from './ui/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Built a comprehensive e-commerce solution for a retail client, featuring advanced analytics, AI-powered product recommendations, and seamless payment integration. Increased conversion rates by 45% and improved user engagement significantly.',
    image: '🛒',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    color: 'from-blue-500 to-cyan-500',
    stats: '45% conversion increase',
  },
  {
    id: 2,
    title: 'Healthcare Telemedicine App',
    description: 'Developed a telemedicine platform connecting patients with healthcare providers. Features include video consultations, prescription management, and secure health records. Served 50K+ patients in the first year.',
    image: '🏥',
    tags: ['React Native', 'Firebase', 'WebRTC', 'HIPAA'],
    color: 'from-green-500 to-emerald-500',
    stats: '50K+ active users',
  },
  {
    id: 3,
    title: 'FinTech Analytics Dashboard',
    description: 'Created a real-time financial analytics dashboard with predictive insights and automated reporting. Helped financial advisors make data-driven decisions and improved client portfolio performance tracking.',
    image: '💳',
    tags: ['Next.js', 'Python', 'PostgreSQL', 'D3.js'],
    color: 'from-purple-500 to-pink-500',
    stats: 'Real-time analytics',
  },
  {
    id: 4,
    title: 'Education LMS Platform',
    description: 'Built an interactive learning management system with video streaming, live assessments, and progress tracking. Used by universities and corporate training programs to deliver engaging educational content.',
    image: '📚',
    tags: ['Vue.js', 'Django', 'AWS', 'Video Streaming'],
    color: 'from-orange-500 to-red-500',
    stats: '100K+ students',
  },
  {
    id: 5,
    title: 'SaaS Project Management Tool',
    description: 'Developed a comprehensive project management SaaS product with collaboration features, time tracking, and resource allocation. Used by teams worldwide to streamline workflows and improve productivity.',
    image: '📊',
    tags: ['Angular', 'NestJS', 'Redis', 'Microservices'],
    color: 'from-indigo-500 to-blue-500',
    stats: '500+ companies',
  },
  {
    id: 6,
    title: 'Mobile Gaming Platform',
    description: 'Created an engaging mobile game with multiplayer capabilities, social features, and in-app purchases. Achieved top 10 rankings in app stores and generated significant revenue through freemium model.',
    image: '🎮',
    tags: ['Unity', 'C#', 'Photon', 'Game Analytics'],
    color: 'from-pink-500 to-rose-500',
    stats: '1M+ downloads',
  },
];

export default function Portfolio() {
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
      // Animate section title
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

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 40,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.08,
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
      id="portfolio"
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white w-full"
      data-scroll-section
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <SectionTitle
          title="Our Portfolio"
          subtitle="Explore our recent projects and see how we've helped businesses transform their digital presence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch justify-items-center sm:justify-items-stretch">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group h-full flex w-full max-w-md sm:max-w-none"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                gradient={project.color}
                stats={project.stats}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

