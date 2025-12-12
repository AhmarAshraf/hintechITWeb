'use client';

import React from 'react';

interface ContactCardProps {
  icon: string;
  title: string;
  content: string;
}

export default function ContactCard({ icon, title, content }: ContactCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg h-full flex flex-col items-center justify-center border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 w-full">
      <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-md">
        {icon}
      </div>
      <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-2 sm:mb-3 text-center">{title}</h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-600 break-words text-center leading-relaxed">{content}</p>
    </div>
  );
}

