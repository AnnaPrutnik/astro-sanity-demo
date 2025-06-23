import React from 'react';
import { urlFor } from '../../../sanity/lib/sanity.image';
import { AboutSectionType } from '../../../types/sanityTypes';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

interface AboutProps {
  data: AboutSectionType;
}

export const About = ({ data }: AboutProps) => {
  const { bio, credentials, image, name, statistics, title } = data;
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative max-w-[500px] mx-auto">
              {image && (
                <Image
                  alt={name || 'Professional consultant'}
                  src={urlFor(image).width(600).height(800).url()}
                  width={600}
                  height={800}
                  className="w-full  h-96 lg:h-[500px] object-cover rounded-lg shadow-xl"
                />
              )}

              {credentials && (
                <div className="absolute -bottom-6 -right-6 bg-accent text-black p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{credentials[0]}+</div>
                    <div className="text-sm">{credentials[1]}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              {title || 'Your Consultant'}
            </h2>

            <div className="prose prose-lg text-grey mb-8">
              {bio ? (
                <div className="space-y-4">
                  <PortableText value={bio} />
                </div>
              ) : (
                <div className="space-y-4">
                  <p>
                    With over a decade of experience in business consulting, I
                    have helped hundreds of companies transform their operations
                    and achieve sustainable growth.
                  </p>
                  <p>
                    My approach combines data-driven insights with practical
                    strategies that deliver measurable results for businesses of
                    all sizes.
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {statistics ? (
                statistics.map((stat: { number: number; label: string }) => (
                  <div className="text-center" key={stat.label}>
                    <div className="text-2xl md:text-3xl font-bold text-accent">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-grey">
                      {stat.label}
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600">
                      500+
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      Clients Served
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600">
                      95%
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      Success Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-600">
                      10+
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      Years Experience
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
