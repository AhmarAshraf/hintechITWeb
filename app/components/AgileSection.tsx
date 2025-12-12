'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from './ui/SectionTitle';

const agileSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description:
      'We start by understanding your business goals, target audience, and technical requirements.',
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Our team creates wireframes and prototypes to visualize the solution before development.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Agile sprints ensure continuous delivery with regular updates and feedback integration.',
  },
  {
    number: '04',
    title: 'Testing & Quality Assurance',
    description:
      'Rigorous testing ensures your product meets the highest quality standards.',
  },
  {
    number: '05',
    title: 'Deployment & Launch',
    description:
      'We handle deployment and ensure a smooth launch with monitoring and support.',
  },
  {
    number: '06',
    title: 'Maintenance & Support',
    description:
      'Ongoing support and updates keep your application running smoothly.',
  },
];

export default function AgileSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
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
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white w-full"
      data-scroll-section
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 w-full">
        <SectionTitle
          title="Our Agile Process"
          subtitle="We follow an agile methodology to deliver high-quality software solutions efficiently and iteratively."
        />

        <div className="max-w-4xl mx-auto w-full space-y-5 sm:space-y-6 md:space-y-8">
          {agileSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 md:gap-8 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-md"
              data-scroll
              data-scroll-speed={index % 2 === 0 ? '0.2' : '0.4'}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

