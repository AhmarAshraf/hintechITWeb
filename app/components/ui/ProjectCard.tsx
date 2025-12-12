'use client';

import React from 'react';
import Card from './Card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
  stats?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  gradient,
  stats,
  index = 0,
}: ProjectCardProps) {
  return (
    <div className="group relative h-full">
      <Card
        className="overflow-hidden h-full flex flex-col"
        dataScroll={true}
        dataScrollSpeed="0.5"
        glow={true}
      >
        <div
          className={`h-40 sm:h-48 bg-gradient-to-br ${gradient} flex items-center justify-center text-5xl sm:text-6xl relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative z-10">{image}</div>
        </div>
        <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col w-full">
          <div className="mb-4 sm:mb-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
              {title}
            </h3>
            {stats && (
              <div className="mb-3">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200">
                  {stats}
                </span>
              </div>
            )}
          </div>
          <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 flex-1 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-auto pt-4 border-t border-gray-100">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
      </Card>
    </div>
  );
}

