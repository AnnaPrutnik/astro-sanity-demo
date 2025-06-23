import React from 'react';
import { HeroSectionType } from '../../../types/sanityTypes';
import ColoredTextBlock from '../shared/ColoredTextBlock';
import Button from '../shared/Button';

interface HeroProps {
  data: HeroSectionType;
}

export const Hero = ({ data }: HeroProps) => {
  const { btnTitle, text, title } = data;
  return (
    <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title ? (
              <ColoredTextBlock value={title} />
            ) : (
              'Transform Your Business with Expert Consultation'
            )}
          </h1>

          {text && (
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {text ||
                'Get personalized strategies and actionable insights to accelerate your growth and achieve your business goals.'}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button>{btnTitle || 'Book Consultation'}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
