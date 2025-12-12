'use client';

import React from 'react';
import Card from './Card';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  index = 0,
}: ServiceCardProps) {
  return (
    <Card
      className="p-6 sm:p-8 md:p-10 lg:p-12 h-full flex flex-col transition-all duration-300 hover:shadow-xl w-full"
      dataScroll={true}
      dataScrollSpeed="0.3"
      glow={true}
    >
      <div className="flex items-start justify-start mb-5 sm:mb-6 px-2 sm:px-4 md:px-6">
        <div className="text-4xl sm:text-5xl md:text-6xl flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 shadow-md transition-transform duration-300 hover:scale-110">
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 px-2 sm:px-4 md:px-6 flex-1">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-left">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-left">{description}</p>
        <ul className="space-y-2.5 sm:space-y-3 mt-auto w-full">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm sm:text-base text-gray-700">
              <svg
                className="w-5 h-5 text-green-500 mr-2.5 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="flex-1 text-left">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

